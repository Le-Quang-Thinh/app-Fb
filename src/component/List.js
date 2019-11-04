import React, { Component } from 'react';
import { stringify } from 'querystring';
import { Alert } from 'react-bootstrap';


class List extends Component {
  constructor(props) {
    super(props);
    this.state = { style : ''};
  }
  render() { 
    const styles=(!this.props.items.active) ? "danger" : "success";

    return (
      <li className="theheight">
        <Alert variant={styles}  onClick={this.props.Active}>{(this.props.items.value)}</Alert>
        <Alert className="theList" dismissible onClick={this.props.delitem}></Alert>
        
      </li>
      )
  }
}
 
export default List;
