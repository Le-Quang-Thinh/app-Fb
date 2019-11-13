import {ADDING,REMOVE} from '../action/action';

const reducer =(state =[],action) =>{
    switch (action.type) {
        case ADDING:
            return [{
                  title: action.title,
                  content : action.content,
                  id: (state.length === 0) ? 0 : state[0].id + 1,
                },...state];
        case REMOVE:
            return  state.filter((event)=>event.id!==action.id);
        default:
            break;
    }
}

export default reducer;