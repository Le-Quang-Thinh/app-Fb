import { combineReducers } from 'redux';
import todosReducers from './todoReducers';

const rootReducer = combineReducers({
    todosReducers
});

export default rootReducer;