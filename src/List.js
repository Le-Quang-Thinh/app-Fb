import React, { Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';
import {connect} from 'react-redux';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

 
class List extends Component {
    // constructor(props){
    //     super (props);
    //     this.state ={Note :
    //         [{
    //             title: 'KDA',
    //             content: 'doNotTrack',
    //             id: 0
    //           },
    //           {
    //             title: 'KDA',
    //             content: 'doNotTrack',
    //             id: 1
    //           },
    //           {
    //             title: 'KDA',
    //             content: 'doNotTrack',
    //             id: 2
    //           }]}
    // }

    remove = (id) =>{
        this.state.Note.splice(id,1);
        this.setState(this.state);
    }

    addNote = (title,content) =>{
        this.state.Note.push({title,content});
        this.setState(this.state);
    }
    render() { 
        return ( 
            <>
            <NoteForm handleAdd={this.addNote.bind(this)}></NoteForm>
                {this.props.Note.map((e,i) => 
                <Note id={e.id} 
                hanldeRemove={this.remove.bind(this)} 
                key={i}>
                     <div >
                    <ExpansionPanel>
                        <ExpansionPanelSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography >
                                <Paper >{e.content}</Paper>
                    </Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <Typography>
                            Content : {e.content}
                        </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    </div>
                </Note>)}
            </>
         );
    }
}
function mapStateToProps(state) {
    return {
        Note: state
    };
}

export default connect(mapStateToProps)(List);
