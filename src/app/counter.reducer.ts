import {createReducer,on} from "@ngrx/store";
import * as actions from "./counter.action";
const initCounter = 10;

const _counterReducer = createReducer(
  initCounter,
 on(actions.increase,(state)=>state+1),
 on(actions.decrease,(state)=>state-1),
 on(actions.reset,(state)=> 0),
 on(actions.setCustom,
 (state,{val})=>  {

    console.log("newVlue",val,state);
    return val+state

 })
)

export function counterReducer(state,action){
   return _counterReducer(state,action);
} 