import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER,PAUSE_START_TIME,OPEN_MODAL,TICK } from './actionsTypes'

let TodoId = 2

export const addTodo = (text,minute,second,timeBonus) => ({
    type: ADD_TODO,
    id: TodoId++,
    text:text,
    minute:minute,
    second:second,
    timeBonus:timeBonus
})
export const pauseOrStatrTime = (id) => ({
    type: PAUSE_START_TIME,
    id: id
})

export const deleteTodo = (id) => ({
    type: REMOVE_TODO,
    id: id
})

export const toggleTodo = (id) => {
     return {
    type: TOGGLE_TODO,
    id: id
}
}

export const Tick = (id) => ({
    type: TICK,
    id: id
    })
export const modalOpen = (id) => 
{
return {
    type: OPEN_MODAL,
    id
  }};
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})