import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO,PAUSE_START_TIME,OPEN_MODAL} from '../actions/actionsTypes'

const INITIAL_DATA = []

const TodoReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case ADD_TODO:
            return [
            ...state,{
                id: action.id,
                text: action.text,
                completed: false,
                stop: false,
                timeStart:action.timeStart,
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
                (todo.id === action.id)
                    ? {...todo, stop: !todo.stop}
                : todo
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