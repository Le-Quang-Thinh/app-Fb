import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {removeNote} from '../action/action';
class Note extends Component {
    // removeNote(){
    //     let {id,hanldeRemove,dispatch} =this.props;
    //     // hanldeRemove(id);
    //     // dispatch({
    //     //     type:'REMOVE',
    //     //     id:id
    //     // })
        removeNote = () =>{
            this.props.removeNote(this.props.id);
        }
    // }
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


  const mapDispatchToProps = {
    removeNote: removeNote
  };
  
 
export default connect(null,mapDispatchToProps)(Note);