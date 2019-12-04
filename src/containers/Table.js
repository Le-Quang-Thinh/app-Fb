import List from '../components/Table'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";

import { connect } from "react-redux";
import {
        deleteTodo,
        toggleTodo,
        setVisibilityFilter,
        modalOpen,
        pauseOrStatrTime,
        Tick
      } from "../actions/actionCreator";
import { bindActionCreators } from "redux";



const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => {
  return { todos: getVisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
 };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deleteTodo,
      toggleTodo,
      setVisibilityFilter,
      modalOpen,
      pauseOrStatrTime,
      Tick
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
