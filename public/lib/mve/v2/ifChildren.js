define(["require", "exports", "./onceLife"], function (require, exports, onceLife_1) {
    "use strict";
    exports.__esModule = true;
    function ifChildren(fun) {
        return function (mx, parent) {
            var currentObject;
            var virtualChild;
            var currentLifeModel;
            var life = onceLife_1.onceLife({
                init: function () {
                    if (currentObject) {
                        currentObject.init();
                    }
                },
                destroy: function () {
                    w.disable();
                    if (currentObject) {
                        currentObject.destroy();
                    }
                    currentLifeModel.destroy();
                }
            });
            var w = mve.Watch({
                before: function () {
                    if (currentLifeModel) {
                        currentLifeModel.destroy();
                    }
                    currentLifeModel = mve.lifeModel();
                },
                exp: function () {
                    return fun(currentLifeModel.me);
                },
                after: function (children) {
                    if (virtualChild) {
                        parent.remove(0);
                        virtualChild = null;
                    }
                    if (currentObject) {
                        if (life.isInit) {
                            currentObject.destroy();
                        }
                        currentObject = null;
                    }
                    if (children) {
                        //初始化
                        virtualChild = parent.newChildAtLast();
                        currentObject = mx.buildChildren(currentLifeModel.me, children, virtualChild);
                        if (life.isInit) {
                            currentObject.init();
                        }
                    }
                }
            });
            return life;
        };
    }
    exports.ifChildren = ifChildren;
});
