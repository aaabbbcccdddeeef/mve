import { onceLife } from "./onceLife";
import { VirtualChild } from "./virtualTreeChildren";
import { JOChildren, JOChildFun } from "./childrenBuilder";
import { BuildResult } from "./model";




export function ifChildren<JO,EO>(
  fun:(me:mve.Inner)=>JOChildren<JO,EO>|null
):JOChildFun<JO,EO>{
  return function(mx,parent){
    let currentObject:BuildResult|null
    let virtualChild:VirtualChild<EO>|null
    let currentLifeModel:mve.LifeModel

    const life=onceLife({
      init(){
        if(currentObject){
          currentObject.init()
        }
      },
      destroy(){
        w.disable()
        if(currentObject){
          currentObject.destroy()
        }
        currentLifeModel.destroy()
      }
    })
    const w=mve.Watch({
      before(){
        if(currentLifeModel){
          currentLifeModel.destroy()
        }
        currentLifeModel=mve.lifeModel()
      },
      exp(){
        return fun(currentLifeModel.me)
      },
      after(children:JOChildren<JO,EO>){
        if(virtualChild){
          parent.remove(0)
          virtualChild=null
        }
        if(currentObject){
          if(life.isInit){
            currentObject.destroy()
          }
          currentObject=null
        }
        if(children){
          //初始化
          virtualChild=parent.newChildAtLast()
          currentObject=mx.buildChildren(currentLifeModel.me,children,virtualChild)
          if(life.isInit){
            currentObject.init()
          }
        }
      }
    })
    return life
  }
}