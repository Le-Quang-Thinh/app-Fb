import { ADD, DELETE, EDIT, MARK, ALL, CLEAR_MARKED } from '../constants/ActionTypes';

const initialState = [{
    text: 'Use Redux',
    marked: false,
    id: 0
}];

export default function todosReducers(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return [{
                id: (state.length === 0) ? 0 : state[0].id + 1,
                marked: false,
                text: action.text
            }, ...state];

        case DELETE:
            return state.filter((todo) => todo.id !== action.id);

        case EDIT:
            return state.map((todo) => todo.id === action.id ? { ...todo, text: action.text } : todo);

        case MARK:
            return state.map((todo) => todo.id === action.id ? { ...todo, marked: !todo.marked } : todo);

        case ALL:
            const areAllMarked = state.every((todo) => todo.marked);
            return state.map((todo) => ({...todo, marked: !areAllMarked}));

        case CLEAR_MARKED:
            return state.filter((todo) => todo.marked === false);

        default:
            return state;
    }
}