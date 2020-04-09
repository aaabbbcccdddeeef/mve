define(["require", "exports", "./virtualTreeChildren", "./onceLife"], function (require, exports, virtualTreeChildren_1, onceLife_1) {
    "use strict";
    exports.__esModule = true;
    function isJOChildFunType(child) {
        return typeof (child) == 'function';
    }
    exports.isJOChildFunType = isJOChildFunType;
    function getItem(item, inits, destroys) {
        if (typeof (item) == 'object') {
            if (mb.Array.isArray(item)) {
                return mb.Array.flatMap(item, function (v) {
                    return getItem(v, inits, destroys);
                });
            }
            else if ('elements' in item) {
                if (item.init) {
                    inits.push(item.init);
                }
                if (item.destroy) {
                    destroys.push(item.destroy);
                }
                return getItem(item.elements, inits, destroys);
            }
            else if ('element' in item) {
                if (item.init) {
                    inits.push(item.init);
                }
                if (item.destroy) {
                    destroys.push(item.destroy);
                }
                return [item.element];
            }
            else {
                return [item];
            }
        }
        else {
            return [item];
        }
    }
    function childrenBuilder(parseView) {
        var mx = {
            buildChildren: function (me, item, parent) {
                var inits = [], destroys = [];
                var children = getItem(item, inits, destroys);
                var array = [];
                var i = 0;
                while (i < children.length) {
                    var child = children[i];
                    i++;
                    if (isJOChildFunType(child)) {
                        var cv = parent.newChildAtLast();
                        array.push(child(mx, cv));
                    }
                    else {
                        var element = void 0;
                        if (typeof (child) == 'object' && 'element' in child) {
                            element = child.element;
                            if (child.init) {
                                inits.push(child.init);
                            }
                            if (child.destroy) {
                                destroys.push(child.destroy);
                            }
                        }
                        else {
                            element = child;
                        }
                        var o = parseView(me, element);
                        parent.push(o.element);
                        array.push(o);
                    }
                }
                var life = onceLife_1.onceLife({
                    init: function () {
                        for (var i_1 = 0; i_1 < array.length; i_1++) {
                            array[i_1].init();
                        }
                        for (var i_2 = 0; i_2 < inits.length; i_2++) {
                            inits[i_2]();
                        }
                    },
                    destroy: function () {
                        for (var i_3 = 0; i_3 < destroys.length; i_3++) {
                            destroys[i_3]();
                        }
                        for (var i_4 = 0; i_4 < array.length; i_4++) {
                            array[i_4].destroy();
                        }
                    }
                });
                return life;
            }
        };
        return function (me, p, children) {
            var vm = virtualTreeChildren_1.VirtualChild.newRootChild(p);
            return mx.buildChildren(me, children, vm);
        };
    }
    exports.childrenBuilder = childrenBuilder;
});