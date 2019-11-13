import {createStore, combineReducers} from 'redux'
import { stringify } from "querystring";

let reducer =(state =[],action) =>{
    switch (action.type) {
        case 'ADDING':
            return [{
                  title: action.title,
                  content : action.content,
                  id: (state.length === 0) ? 0 : state[0].id + 1,
                },...state]
        case 'REMOVE':
            return  state.filter((event)=>event.id!==action.id);
        default:
            break;
    }
}



const store =createStore(reducer);

store.subscribe(()=>console.log(store.getState()));
store.dispatch({
    type:'ADDING',
    title:'be',
    content:'like'
})


export default store;