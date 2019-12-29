import mveUtil = require("../mve/mveUtil");
import superBuildChildrenFactory = require("../mve/mveBuildChildren");
import DOM = require("./DOM");
import mveParse = require("../mve/mveParse");
import mveExp = require("../mve/mveExp");
import jsdom = require("../front-lib/jsdom");
import { EModel, XModel } from "../mve/model";

export=function(p?:{
	cache:mve.Value<any>;
	debug?:boolean;
}){
	p=p||({} as any);
	const cache=p.cache||function(){
		const w=window.top as any;
		if(arguments.length==0){
			return w._Dep_;
		}else{
			w._Dep_=arguments[0];
		}
	};
	const util=mveUtil(cache);
	const bindEvent=function(map,f){
		if(map){
			mb.Object.forEach(map,function(v,k){
				f(k,v);
			});
		}
	};
	const bindKV=function(bind,key,value,f){
		bind(value,function(v){
			f(key,v);
		});
	};
	const bindMap=function(bind,map,f){
		if(map){
			mb.Object.forEach(map,function(v,k){
				bindKV(bind,k,v,f);
			});
		}
	};
	const replaceChild=function(e,old_el,new_el){
		DOM.replaceWith(old_el,new_el);
	};

	const makeUp=function(e:EModel,x:XModel,json){   
		bindMap(x.bind,json.attr,function(key,value){
			DOM.attr(e,key,value);
		});
		
		x.if_bind(json.cls,function(cls){
			DOM.attr(e,"class",cls);
		});
		
		bindMap(x.bind,json.prop,function(key,value){
			DOM.prop(e,key,value);
		});
		
		bindMap(x.bind,json.style,function(key,value){
			DOM.style(e,key,value);
		});
		
		bindEvent(json.action,function(key,value){
			DOM.action(e,key,value);
		});
		
		x.if_bind(json.text,function(value){
			DOM.text(e,value);
		});
		
		x.if_bind(json.value,function(value){
			DOM.value(e,value);
		});

		x.if_bind(json.content,function(value){
			DOM.content(e,value);
		})

		x.if_bind(json.html,function(html){
			DOM.html(e,html);
		});
		
		x.if_bind(json.fragment,function(cs){
			DOM.empty(e);
			var me={};
			mb.Array.forEach(cs,function(c){
				DOM.appendChild(e,jsdom.parseElement(c,me));
			});
		});

		x.if_bind(json.element,function(element){
			DOM.empty(e);
			DOM.appendChild(e,jsdom.parseElement(element));
		});
	};
	const buildChildrenFactory=superBuildChildrenFactory(util);
	const create=function(v:{
		createElement(o):any;
	}){
		const parse=mveParse({
			whenNotObject(mve,x,e,json,m){
				return {
					element:DOM.createTextNode(json||""),
					m:m
				};
			},
			buildElement(mve,x,e,json,m){
				const element=v.createElement(json);
				m=buildChildren({
													pel:element,
													replaceChild:replaceChild
												},
												x,
												json.children,
												m);
				/*像select，依赖子元素先赋值再触发*/
				makeUp(element,x,json);
				return {
					element:element,
					m:m
				};
			}
		});
		/**
		 * repeat生成json结果是被观察的，受哪些影响，重新生成，替换原来的节点。
		 * 生成过程，而json叶子结点里的函数引用，如style,attr，则受具体的影响
		 */
		const buildChildren=buildChildrenFactory({
			removeChild:DOM.removeChild,
			insertChildBefore:DOM.insertChildBefore,
			appendChild:DOM.appendChild,
			parse:parse,
			//循环调用的注入，这种延迟最好，如果难免副作用
			mve(fun){
				return mve(fun);
			}
		});
		//兼容性
		const compatible=function(user_func,user_result){
			if(p.debug){
				alert("不友好的元素节点"+user_func);
			}
			mb.log("顶层user_result目前是:",user_func,user_result);
			if(user_result && typeof(user_result)=="object"){
				//如果是生成元素结点
				return {type:"div",element:user_func};
			}else{
				//如果是生成普通节点
				return {type:"span",text:user_func};
			}
		};
		const mve=mveExp(util,compatible,parse);
		return mve;
	};
	const mve:any=create({
		createElement(json){
			var NS=json.NS;
			if(NS){
				return DOM.createElementNS(json.type,json.NS);
			}else{
				return DOM.createElement(json.type);
			}
		}
	});
	mve.svg_NS="http://www.w3.org/2000/svg";
	mve.svg=create({
		createElement(json){
			return DOM.createElementNS(json.type,mve.svg_NS);
		}
	});
	mve.svgCompatible=mb.Function.quote.one;
	return mve;
}