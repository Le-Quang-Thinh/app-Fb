import React, { Component } from 'react';
import {} from "../actions/actionsTypes";
import Example from './Accordion'
class Tables extends Component {
    render() { 
        return ( 
            <>
            {this.props.todos.todos.length !== 0 ? (
                <table
                  style={{ marginTop: "60px" }}
                  className="table table-hover table-dark"
                >
                  <thead>
                    <tr>
                      <th scope="col">Pomodoro</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.todos.todos.map(todo => (
                      <tr key={todo.id}>
                        <td 
                          style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                            width:"70%"
                          }}
                        >
                        <Example todo={todo} modal_Open={this.props.todos.modalOpen}  StartTick={this.props.todos.Tick} StartCountDown={this.props.todos.pauseOrStatrTime}></Example>
                        </td>
                        <td>
                          <span
                            className="fas fa-minus-circle"
                            onClick={() => this.props.todos.deleteTodo(todo.id)}
                            style={{
                              color: "white",
                              fontSize: "20pt",
                              marginRight: "20px"
                            }}
                          />
                          {/* <span
                            className="fas fa-check-circle"
                            onClick={() => this.props.todos.toggleTodo(todo.id)}
                            style={{ color: "white", fontSize: "20pt" }}
                          /> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div
                  style={{ marginTop: "50px" }}
                  className="col-lg-10 col-md-10 col-xs-12 col-sm-12 offset-lg-1"
                >
                  <div className="alert alert-danger" role="alert">
                    Pomodoro is empty or Filter results show no results
                  </div>
                </div>
              )}{" "}
            </>
         );
    }
}
 
export default Tables;