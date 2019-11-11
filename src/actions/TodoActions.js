import * as types from '../constants/ActionsType';

export function addTodo(text){
    return {
        type: types.ADD,
        text
    };
}


export function deleteTodo(id){
    return {
        type : types.DELETE,
        id
    }
} 

export function markAll() {
    return {
        type: types.ALL
    };
}

export function clearMarked() {
    return {
        type: types.CLEAR
    };
}