import {createStore, combineReducers} from 'redux'
import { stringify } from "querystring";
import reducer from '../reducer/reducer';


const store =createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>console.log(store.getState()));
store.dispatch({
    type:'ADDING',
    title:'be',
    content:'like'
})


export default store;