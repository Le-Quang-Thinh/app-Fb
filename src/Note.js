import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
class Note extends Component {
    removeNote(){
        let {id,hanldeRemove,dispatch} =this.props;
        // hanldeRemove(id);
        dispatch({
            type:'REMOVE',
            id:id
        })
    }
    render() { 
        return ( 
            <>
                {this.props.children}
                <Button onClick={this.removeNote.bind(this)} variant="contained" color="secondary" >
                   Remove
                </Button>
            </>
         );
    }
}
 
export default connect()(Note);