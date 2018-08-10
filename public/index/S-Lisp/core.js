{
  "index/S-Lisp/index/a.lisp": "(log '我是A文件)\r\n\r\n(let x (load './b.lisp))\r\n(if-run (> 9 8)\r\n\t\t{\r\n\t\t\t(log '小于98)\r\n\t\t}\r\n\t\t{\r\n\t\t\t(log '大于98)\r\n\t\t}\r\n)\r\n(x)\r\n[\r\n\ta 98 b {\r\n\t\t(log 'as文件返回)\r\n\t}\r\n]",
  "index/S-Lisp/index/b.lisp": "(log '我是B文件)\r\n\r\n{\r\n\t(log 'b文件返回)\r\n}",
  "index/S-Lisp/index/ca.lisp": "\r\n\r\n(let mve (load '../util/mve/index.lisp))\r\n{\r\n\t(let (a b c ) args)\r\n\t(mve\r\n\t\t{\r\n\t\t\t(let me* args)\r\n\t\t\t(let ak (me.Value 98))\r\n\t\t\t[\r\n\t\t\t\tinit {\r\n\t\t\t\t\t(log '我是子组件初始化)\r\n\t\t\t\t}\r\n\t\t\t\tdestroy {\r\n\t\t\t\t\t(log '我是子组件销毁)\r\n\t\t\t\t}\r\n\t\t\t\telement {\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype div\r\n\t\t\t\t\t\tattr [\r\n\t\t\t\t\t\t\ta 0 b 1\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t\tchildren [\r\n\t\t\t\t\t\t\t[\r\n\t\t\t\t\t\t\t\ttype button\r\n\t\t\t\t\t\t\t\taction [\r\n\t\t\t\t\t\t\t\t\tclick {\r\n\t\t\t\t\t\t\t\t\t\t(ak (+ (ak) 1 ))\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t]\r\n\t\t\t\t\t\t\t\ttext (str-join [我是组件 (ak)])\r\n\t\t\t\t\t\t\t]\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t]\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t}\r\n\t)\r\n}",
  "index/S-Lisp/index/index.lisp": "\r\n(let x {\r\n\t(log 9)\r\n})\r\n(quote 88)\r\n(log 988 7)\t\r\n\r\n(let a (load './a.lisp) b (load './b.lisp))\r\n(let mve (load '../util/mve/index.lisp))\r\n(let x* a)\r\n( (x 'b) )\r\n{\r\n\t(log 98 7)\t\r\n}\r\n(mve\r\n\t{\r\n\t\t(let me* args)\r\n\t\t(let a (me.Value 9))\r\n\t\t(log (a))\r\n\t\t(a (+ (a) 1))\r\n\t\t(log (a))\r\n\t\t[\r\n\t\t\telement [\r\n\t\t\t\ttype div\r\n\t\t\t\taction [\r\n\t\t\t\t\tclick {\r\n\t\t\t\t\t\t(log 98)\r\n\t\t\t\t\t}\r\n\t\t\t\t]\r\n\t\t\t\tattr [\r\n\t\t\t\t\ta 98 \r\n\t\t\t\t\tb 89\r\n\t\t\t\t]\r\n\t\t\t\tchildren [\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype div\r\n\t\t\t\t\t\tattr [\r\n\t\t\t\t\t\t\tcolor red\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t\ttext 你\r\n\t\t\t\t\t]\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype div\r\n\t\t\t\t\t\tstyle [\r\n\t\t\t\t\t\t\tcolor red\r\n\t\t\t\t\t\t\tbackground-color gray\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t\ttext 我\r\n\t\t\t\t\t]\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype button\r\n\t\t\t\t\t\ttext {\r\n\t\t\t\t\t\t\t(a)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\taction [\r\n\t\t\t\t\t\t\tclick {\r\n\t\t\t\t\t\t\t\t(a (+ (a) 1))\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t]\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype button\r\n\t\t\t\t\t\ttext {\r\n\t\t\t\t\t\t\t(+ (a) 1)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\taction [\r\n\t\t\t\t\t\t\tclick {\r\n\t\t\t\t\t\t\t\t(a (+ (a) 2))\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t]\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t[\r\n\t\t\t\t\t\t\ttype div\r\n\t\t\t\t\t\t\ttext (str-join [来吧 (a)])\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t}\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype ul\r\n\t\t\t\t\t\tchildren [\r\n\t\t\t\t\t\t\t[\r\n\t\t\t\t\t\t\t\ttype li\r\n\t\t\t\t\t\t\t\ttext 我是中国人\r\n\t\t\t\t\t\t\t]\r\n\t\t\t\t\t\t\t[\r\n\t\t\t\t\t\t\t\ttype li\r\n\t\t\t\t\t\t\t\ttext 你也说中文\r\n\t\t\t\t\t\t\t]\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t]\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype input\r\n\t\t\t\t\t\tvalue 98\r\n\t\t\t\t\t]\r\n\t\t\t\t\t[\r\n\t\t\t\t\t\ttype (load './ca.lisp)\r\n\t\t\t\t\t\tparams [\r\n\t\t\t\t\t\t\tx y z\r\n\t\t\t\t\t\t]\r\n\t\t\t\t\t]\r\n\t\t\t\t\t\"中国人\"\r\n\t\t\t\t]\r\n\t\t\t]\r\n\t\t]\r\n\t}\r\n)",
  "index/S-Lisp/util/index.lisp": "\r\n\r\n\r\n`致力于变成多平台通用的文件`\r\n(let \r\n\t!= {\r\n\t\t(not (apply = args))\r\n\t}\r\n\tempty-fun {}\r\n\tdefault {\r\n\t\t(let (a dv) args)\r\n\t\t(if (exist? a) a dv)\r\n\t}\r\n\tif-run {\r\n\t\t(let (a b c) args)\r\n\t\t(let c  (default c empty-fun))\r\n\t\t(let run (if a b c))\r\n\t\t(run)\r\n\t}\r\n)\r\n\r\n[\r\n\t!= '!=\r\n\tempty-fun 'empty-fun\r\n\t`不想使用*的kvs-match，可以用这个kvs-match`\r\n\tkvs-match {\r\n\t\t(let (kvs) args)\r\n\t\t{\r\n\t\t\t(let (k) args)\r\n\t\t\t(kvs-find1st kvs k)\r\n\t\t}\r\n\t}\r\n\t`如果没有，设置默认值`\r\n\tdefault 'default\r\n\t`减少循环`\r\n\tforEach {\r\n\t\t(let (xs run) args forEach this)\r\n\t\t(if-run (exist? xs)\r\n\t\t\t{\r\n\t\t\t\t(let (x ...xs) xs)\r\n\t\t\t\t(run x)\r\n\t\t\t\t(forEach xs run)\r\n\t\t\t}\r\n\t\t)\r\n\t}\r\n\tkvs-forEach {\r\n\t\t(let (kvs run) args kvs-forEach this)\r\n\t\t(if-run (exist? kvs)\r\n\t\t\t{\r\n\t\t\t\t(let (k v ...kvs) kvs)\r\n\t\t\t\t(run v k)\r\n\t\t\t\t(kvs-forEach kvs run)\r\n\t\t\t}\r\n\t\t)\r\n\t}\r\n\t`条件执行`\r\n\tif-run 'if-run\r\n\tswitch {\r\n\t\t(let (str kvs default-fun) args)\r\n\t\t(let o (kvs-find1st kvs str))\r\n\t\t(if (exist? o) o (default default-fun empty-fun))\r\n\t}\r\n\t`多条件if,switch`\r\n\tswitch-run {\r\n\t\t(let run (apply switch args))\r\n\t\t(run)\r\n\t}\r\n\r\n\tload {\r\n\t\t(load (first args))\r\n\t}\r\n]",
  "index/S-Lisp/util/mve/index.lisp": "(let util* (load './util.lisp)\r\n\t Parse (load './parse.lisp)\r\n)\r\n(util.Exp Parse)",
  "index/S-Lisp/util/mve/parse.lisp": "\r\n(let bind {\r\n\t\t(let (watch value f) args)\r\n\t\t(if-run (function? value)\r\n\t\t\t\t{\r\n\t\t\t\t\t(watch \r\n\t\t\t\t\t\t'exp {\r\n\t\t\t\t\t\t\t(value)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t'after {\r\n\t\t\t\t\t\t\t(f (first args))\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t)\r\n\t\t\t\t}\r\n\t\t\t\t{\r\n\t\t\t\t\t(f value)\r\n\t\t\t\t}\r\n\t\t)\r\n\t} bindKV {\r\n\t\t(let (watch key value f) args)\r\n\t\t(bind watch value {\r\n\t\t\t\t(f key \r\n\t\t\t\t\t(first args)\r\n\t\t\t\t)\r\n\t\t\t}\r\n\t\t)\r\n\t} bindMap {\r\n\t\t(let (watch map f) args)\r\n\t\t(if-run (exist? map)\r\n\t\t\t\t{\r\n\t\t\t\t\t(kvs-forEach map \r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t(let (v k) args)\r\n\t\t\t\t\t\t\t(bindKV watch k v f)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t)\r\n\t\t\t\t}\r\n\t\t)\r\n\t} bindEvent {\r\n\t\t(let (map f) args)\r\n\t\t(if-run (exist? map)\r\n\t\t\t\t{\r\n\t\t\t\t\t(kvs-forEach map \r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t(let (v k) args)\r\n\t\t\t\t\t\t\t(f k v)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t)\r\n\t\t\t\t}\r\n\t\t)\r\n\t} if-bind {\r\n\t\t(let (watch value f) args)\r\n\t\t(if-run \r\n\t\t\t(exist? value)\r\n\t\t\t{\r\n\t\t\t\t(bind watch value f)\r\n\t\t\t}\r\n\t\t)\r\n\t}\r\n)\r\n(let replaceWith \r\n\t{\r\n\t\t(let (old-e new-e) args)\r\n\t\t(js-call \r\n\t\t\t(js-attr old-e 'parentNode)\r\n\t\t\t'replaceChild\r\n\t\t\t(list new-e old-e)\r\n\t\t)\r\n\t}\r\n)\r\n(let Parse-fun \r\n\t{\r\n\t\t(let (fun watch init destroy mve change) args)\r\n\t\t(watch 'exp fun 'after \r\n\t\t\t{\r\n\t\t\t\t(let (element) args)\r\n\t\t\t\t(let newObj \r\n\t\t\t\t\t(mve \r\n\t\t\t\t\t\t{ \r\n\t\t\t\t\t\t\t[ element 'element] \r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t)\r\n\t\t\t\t)\r\n\t\t\t\t(let obj (change))\r\n\t\t\t\t(change newObj)\r\n\t\t\t\t(let newObj* newObj)\r\n\t\t\t\t(if-run (exist? obj)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t(let obj* obj)\r\n\t\t\t\t\t\t(replaceWith \r\n\t\t\t\t\t\t\t(obj.getElement)\r\n\t\t\t\t\t\t\t(newObj.getElement)\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t\t(if-run (exist? obj.destroy) obj.destroy)\r\n\t\t\t\t\t\t(if-run (exist? newObj.init) newObj.init)\r\n\t\t\t\t\t}\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t(if-run (exist? newObj.init)\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t(init \r\n\t\t\t\t\t\t\t\t\t(extend newObj.init (init))\r\n\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t\t(if-run (exist? newObj.destroy)\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t(destroy \r\n\t\t\t\t\t\t\t\t\t(extend newObj.destroy (destroy))\r\n\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t}\r\n\t\t\t\t)\r\n\t\t\t}\r\n\t\t)\r\n\t}\r\n)\r\n(let Parse {\r\n\t\t(let (json watch init destroy mve) args Parse this)\r\n\t\t(let json (default json \"\"))\r\n\t\t(if-run (list? json)\r\n\t\t\t{\r\n\t\t\t\t`列表情况，对应js中字典`\r\n\t\t\t\t(let j* json)\r\n\t\t\t\t(if-run (function? j.type)\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t`自定义组件`\r\n\t\t\t\t\t\t\t(let obj* (j.type j.params))\r\n\t\t\t\t\t\t\t(if-run (exist? obj.init)\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(init \r\n\t\t\t\t\t\t\t\t\t\t(extend obj.init (init))\r\n\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t(if-run (exist? obj.destroy)\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(destroy \r\n\t\t\t\t\t\t\t\t\t\t(extend obj.destroy (destroy))\r\n\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t(obj.getElement )\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t`原生组件`\r\n\t\t\t\t\t\t\t(let e \r\n\t\t\t\t\t\t\t\t(js-call 'document 'createElement \r\n\t\t\t\t\t\t\t\t\t(list j.type)\r\n\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`attr属性`\r\n\t\t\t\t\t\t\t(bindMap watch j.attr \r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(let (k v) args)\r\n\t\t\t\t\t\t\t\t\t(js-call e 'setAttribute (list k v ))\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`style属性`\r\n\t\t\t\t\t\t\t(let style (js-attr e 'style))\r\n\t\t\t\t\t\t\t(bindMap watch j.style\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(let (k v) args)\r\n\t\t\t\t\t\t\t\t\t(js-attr style k v)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`动作`\r\n\t\t\t\t\t\t\t(bindEvent j.action\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(let (k v) args)\r\n\t\t\t\t\t\t\t\t\t(js-call 'mb.DOM 'addEvent (list e k v))\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`内部字符`\r\n\t\t\t\t\t\t\t(if-bind watch j.text \r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(let (v) args)\r\n\t\t\t\t\t\t\t\t\t(js-attr e 'innerText v)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`内部值`\r\n\t\t\t\t\t\t\t(if-bind watch j.value\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(let (v) args)\r\n\t\t\t\t\t\t\t\t\t(js-attr e 'value v)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`innerHTML`\r\n\t\t\t\t\t\t\t(if-bind watch j.html\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(let (v) args)\r\n\t\t\t\t\t\t\t\t\t(js-attr e 'innerHTML v)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t`children`\r\n\t\t\t\t\t\t\t(if-run \r\n\t\t\t\t\t\t\t\t(function? j.children)\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t`children是函数，即repeat`\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t`children是列表`\r\n\t\t\t\t\t\t\t\t\t(forEach j.children \r\n\t\t\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t\t\t(let (child) args)\r\n\t\t\t\t\t\t\t\t\t\t\t(let ce (Parse child watch init destroy mve))\r\n\t\t\t\t\t\t\t\t\t\t\t(js-call e 'appendChild (list ce))\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\te\r\n\t\t\t\t\t\t}\r\n\t\t\t\t)\r\n\t\t\t}\r\n\t\t\t{\r\n\t\t\t\t(if-run (function? json)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t`function`\r\n\t\t\t\t\t\t(let change (cache []))\r\n\t\t\t\t\t\t(Parse-fun json watch init destroy mve change)\r\n\t\t\t\t\t\t(log (change))\r\n\t\t\t\t\t\t((kvs-find1st (change) 'getElement))\r\n\t\t\t\t\t}\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t`值节点`\r\n\t\t\t\t\t\t(js-call 'document 'createTextNode \r\n\t\t\t\t\t\t\t(list json)\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t}\r\n\t\t\t\t)\r\n\t\t\t}\r\n\t\t)\r\n\t}\r\n)\r\n\r\n{\r\n\t(let me* args)\r\n\t(let \r\n\t\tinit (cache []) \r\n\t\tdestroy (cache []) \r\n\t)\r\n\t(let getElement\r\n\t\t(if-run (function? me.element)\r\n\t\t\t{\r\n\t\t\t\t`function`\r\n\t\t\t\t(let c-el (cache []))\r\n\t\t\t\t(Parse-fun me.element me.Watch init destroy me.mve c-el)\r\n\t\t\t\t{\r\n\t\t\t\t\t((kvs-find1st (c-el) 'getElement))\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t{\r\n\t\t\t\t(let el \r\n\t\t\t\t\t(Parse me.element me.Watch init destroy me.mve)\r\n\t\t\t\t)\r\n\t\t\t\t{\r\n\t\t\t\t\tel\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t)\r\n\t)\r\n\t[\r\n\t\tgetElement 'getElement\r\n\t\tinit {\r\n\t\t\t(forEach (init) \r\n\t\t\t\t{\r\n\t\t\t\t\t(let (x) args)\r\n\t\t\t\t\t(x)\r\n\t\t\t\t}\r\n\t\t\t)\r\n\t\t}\r\n\t\tdestroy {\t\t\t\r\n\t\t\t(forEach (destroy)\r\n\t\t\t\t{\r\n\t\t\t\t\t(let (x) args)\r\n\t\t\t\t\t(x)\r\n\t\t\t\t}\r\n\t\t\t)\r\n\t\t}\r\n\t]\r\n}",
  "index/S-Lisp/util/mve/util.lisp": "\r\n\r\n\r\n(let Dep-target (cache null))\r\n\r\n(let Dep ({\r\n\t\t(let uid (cache 0))\r\n\t\t{\r\n\t\t\t(let subs  (cache null))\r\n\t\t\t(uid (+ uid 1))\r\n    \t\t[\r\n\t\t\t\tid (uid)\r\n    \t\t\tdepend {\r\n    \t\t\t\t(if-run (exist? (Dep-target))\r\n\t\t\t\t\t\t\t {\r\n\t\t\t\t\t\t\t \t\t(subs\r\n\t\t\t\t\t\t\t\t \t\t(kvs-extend  \r\n\t\t\t\t\t\t\t \t\t\t\t(kvs-find1st (Dep-target) 'id) \r\n\t\t\t\t\t\t\t\t\t\t\t(Dep-target)\r\n\t\t\t\t\t\t\t \t\t\t\t(subs) \r\n\t\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t\t\t)\r\n\t\t\t\t\t\t\t }\r\n\t\t\t\t\t)\r\n    \t\t\t}\r\n    \t\t\tnotify {\r\n    \t\t\t\t(let old_subs (subs))\r\n    \t\t\t\t(subs [])\r\n    \t\t\t\t(kvs-forEach old_subs \r\n    \t\t\t\t\t{\r\n    \t\t\t\t\t\t(let (v k) args)\r\n    \t\t\t\t\t\t(let update \r\n    \t\t\t\t\t\t\t(kvs-find1st v 'update)\r\n    \t\t\t\t\t\t)\r\n    \t\t\t\t\t\t(update)\r\n    \t\t\t\t\t}\r\n    \t\t\t\t)\r\n    \t\t\t}\r\n    \t\t]\r\n\t\t}\r\n\t})\r\n\t`值节点`\r\n\tValue {\r\n\t\t(let dep* (Dep))\r\n\t\t(let v \r\n\t\t\t(cache \r\n\t\t\t\t(if (exist? args) (first args) null)\r\n\t\t\t)\r\n\t\t)\r\n\t\t{\r\n\t\t\t(let ags args)\r\n\t\t\t(if-run (empty? ags)\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t(dep.depend)\r\n\t\t\t\t\t\t(v)\r\n\t\t\t\t\t}\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\t(if-run (exist? (Dep-target))\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(log '计算期间不允许修改)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t\t(v (first ags))\r\n\t\t\t\t\t\t\t\t\t(dep.notify)\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t}\r\n\t\t\t)\r\n\t\t}\r\n\t}\r\n\tWatcher ({\r\n\t\t(let uid (cache 0))\r\n\t\t{\r\n\t\t\t(let p* args)\r\n\t\t\t(let  \r\n\t\t\t\tbefore  (default p.before empty-fun) \r\n\t\t\t\tafter (default p.after empty-fun)\r\n\t\t\t)\r\n\r\n\t\t\t(let enable (cache true))\r\n\t\t\t(uid (+ (uid) 1))\r\n\t\t\t(let me (cache null))\r\n\t\t\t(let update \r\n\t\t\t\t{\r\n\t\t\t\t\t(if-run (enable)\r\n\t\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t\t(let bo (before))\r\n\t\t\t\t\t\t\t\t(Dep-target (me))\r\n\t\t\t\t\t\t\t\t(let ao (p.exp bo))\r\n\t\t\t\t\t\t\t\t(Dep-target null)\r\n\t\t\t\t\t\t\t\t(after ao)\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t)\r\n\t\t\t\t}\r\n\t\t\t)\r\n\t\t\t(me [\r\n\t\t\t\tid (uid)\r\n\t\t\t\tupdate 'update\r\n\t\t\t\tdisable {\r\n\t\t\t\t\t(enable false)\r\n\t\t\t\t}\r\n\t\t\t])\r\n\t\t\t(update)\r\n\t\t\t(me)\r\n\t\t}\r\n\t})\r\n\r\n\tCache {\r\n\t\t(let dep* (Dep))\r\n\t\t(let (watch func) args)\r\n\t\t(let cache (cache null))\r\n\t\t(watch [\r\n\t\t\texp {\r\n\t\t\t\t(cache (func ))\r\n\t\t\t\t(dep.notify)\r\n\t\t\t}\r\n\t\t])\r\n\t\t{\r\n\t\t\t(dep.depend)\r\n\t\t\t(cache)\r\n\t\t}\r\n\t}\r\n)\r\n\r\n[\r\n\tDep (quote Dep)\r\n\t\r\n\tValue (quote Value)\r\n\r\n\tWatcher (quote Watcher)\r\n\r\n\tCache (quote Cache)\r\n\r\n\tExp {\r\n\t\t(let (Parse) args)\r\n\t\t(let ret {\r\n\t\t\t(let (func) args mve this)\r\n\t\t\t(let watchPool (cache null))\r\n\t\t\t(let Watch \r\n\t\t\t\t{\r\n\t\t\t\t\t(let w (apply Watcher args))\r\n\t\t\t\t\t(watchPool \r\n\t\t\t\t\t\t(extend w \r\n\t\t\t\t\t\t\t(watchPool)\r\n\t\t\t\t\t\t)\r\n\t\t\t\t\t)\r\n\t\t\t\t\tw\r\n\t\t\t\t}\r\n\t\t\t)\r\n\t\t\t(let Cache \r\n\t\t\t\t{\r\n\t\t\t\t\t(Cache Watch (first args))\r\n\t\t\t\t}\r\n\t\t\t)\r\n\t\t\t`用户函数返回`\r\n\t\t\t(let result* \r\n\t\t\t\t(func \r\n\t\t\t\t\t'k (cache null)\r\n\t\t\t\t\t'Value Value\r\n\t\t\t\t\t'Watch Watch\r\n\t\t\t\t\t'Cache Cache\r\n\t\t\t\t)\r\n\t\t\t)\r\n\t\t\t(let json* \r\n\t\t\t\t(Parse \r\n\t\t\t\t\t'element result.element\r\n\t\t\t\t\t'Value Value\r\n\t\t\t\t\t'Watch Watch\r\n\t\t\t\t\t'Cache Cache\r\n\t\t\t\t\t'mve mve\r\n\t\t\t\t)\r\n\t\t\t)\r\n\t\t\t(let \r\n\t\t\t\tuser-init (default result.init empty-fun)\r\n\t\t\t\telement-init (default json.init empty-fun)\r\n\t\t\t\tuser-destroy (default result.destroy empty-fun)\r\n\t\t\t\telement-destroy (default json.destroy empty-fun)\r\n\t\t\t)\r\n\t\t\t[\r\n\t\t\t\tgetElement (quote json.getElement)\r\n\t\t\t\tinit {\r\n\t\t\t\t\t(element-init)\r\n\t\t\t\t\t(user-init)\r\n\t\t\t\t}\r\n\t\t\t\tdestroy {\r\n\t\t\t\t\t(user-destroy)\r\n\t\t\t\t\t(element-destroy)\r\n\t\t\t\t\t(forEach (watchPool) \r\n\t\t\t\t\t\t{\r\n\t\t\t\t\t\t\t(let w* (first args))\r\n\t\t\t\t\t\t\t(w.disable)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t)\r\n\t\t\t\t}\r\n\t\t\t]\r\n\t\t})\r\n\t\tret\r\n\t}\r\n]\r\n"
}