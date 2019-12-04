import React, { Component } from "react";
import Tables from './ListTable';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import Button from 'react-bootstrap/Button'


class List extends Component {
  render() {
    return (
      <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-12 col-xs-12">
        <nav style={{ marginTop: "60px" }}>
          <ol className="breadcrumb">
            <li
              className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ALL ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}
            >
             All
            </li>
            <li
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
            >
              Completed
            </li>
            <li
               className={"breadcrumb-item "+ (this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : '') }
              onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}
            >
              Active
            </li>
          </ol>
        </nav>
        <Tables todos={this.props} ></Tables>
      </div>
    );
  }
}

export default List;