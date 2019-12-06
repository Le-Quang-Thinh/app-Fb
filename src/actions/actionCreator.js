import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER,PAUSE_START_TIME,OPEN_MODAL,TICK } from './actionsTypes'
import ref from '../firebaseConfig';

export const addTodo = (text,minute,second,timeBonus) =>{ 
    const rand=Math.floor(Math.random() * 999999);
    // let bbc='';
    ref.push({
        id: rand,
        text: text,
        completed: false,
        stop: true,
        minute:minute,
        second:second,
        timeBonus:timeBonus,
        timeStop:'',
        modal: false
        // object: ''
    })
    // .then(function(messageRef) {
    //     // console.log(messageRef.path.pieces_[1]);
    //     bbc=messageRef.path.pieces_[1];
    //     console.log(bbc);
    //     messageRef.update({
    //         id: messageRef.path.pieces_[1]
    //       });
    // })
    // console.log('bbc',bbc);
    return ({
    type: ADD_TODO,
    id: rand,
    text:text,
    minute:minute,
    second:second,
    timeBonus:timeBonus
})}
export const pauseOrStatrTime = (id) => ({
    type: PAUSE_START_TIME,
    id: id
})

export const deleteTodo = (id) =>{ 
    return({
    type: REMOVE_TODO,
    id: id
})}

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