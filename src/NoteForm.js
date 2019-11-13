import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class NoteForm extends Component {
    handleSubmit=(e)=>{
        e.preventDefault();
        // this.props.handleAdd(this.refs.title.value,this.refs.content.value);
       
        // this.toggle();
        let {dispatch}= this.props;
        dispatch({
            type:'ADDING',
            title:this.title.value,
            content:this.content.value
        })
        this.title.value = ''
        this.content.value =' ';
    }

    render() {
        return ( 
            // <form onSubmit={this.handleSubmit.bind(this)}>
            //     <input  type="text" placeholder="enter title" ref="title"></input>
            //     <input  type="text" placeholder="enter Content" ref="content"></input>
                
            // </form>
            <form  onSubmit={this.handleSubmit.bind(this)}  noValidate autoComplete="off">
            <div>
              <TextField
                id="standard-basic"
                label="enter tile"
                margin="normal"
                inputRef={ref => { this.title = ref; }}
              />
            </div>
            <div>
              <TextField
                id="standard-basic"
                label="enter Content"
                margin="normal"
                inputRef={ref => { this.content = ref; }}

              />
              </div>
            <Button onClick={this.handleSubmit.bind(this)} variant="contained" color="primary">
                   Oke
                </Button>
            </form>
         );
    }
}
 
export default connect()(NoteForm);

