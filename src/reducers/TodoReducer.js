import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO,PAUSE_START_TIME,OPEN_MODAL,TICK} from '../actions/actionsTypes'

const INITIAL_DATA = []

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TODO:
            return [
            ...state,{
                id: action.id,
                text: action.text,
                completed: false,
                stop: true,
                minute:action.minute,
                second:action.second,
                timeBonus:action.timeBonus,
                timeStop:'',
                modal: false
            }
        ]
        case TOGGLE_TODO:
             return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
         )
        case REMOVE_TODO:
        const numIndex = parseInt(action.id)
             return state.filter(todo => todo.id !== numIndex);
        case PAUSE_START_TIME :
             return state.map(todo =>
                (todo.id === action.id) ? {...todo, stop: !todo.stop} : todo 
                )
        case TICK:
            return(
                state.map(todo => 
                        (todo.id === action.id && todo.stop === false) 
                            ? (todo.second > 0) 
                                ? {...todo,second:todo.second-1}
                                : (todo.second ===0)  
                                    ? ( parseInt(todo.minute) === 0) 
                                        ? {...todo,stop:true,completed:true} 
                                        : {...todo,second: 59 ,minute:  parseInt(todo.minute)-1}
                                    : {...todo,second: 59}
                            :todo
                            )
                )
        case OPEN_MODAL:
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, modal:!todo.modal}
                    : todo
                )
        default:
        return state
    }
}

export default TodoReducer