import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Toggle extends Component {
    render() {
      return (
        <Button onClick={this.props.onHandleClick}>
           {this.props.toggles.TToggle ? <p>Off</p> : <p>On</p>}
        </Button>
      );
    }
  }
export default Toggle;