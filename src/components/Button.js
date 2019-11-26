import React, { Component } from 'react';

import {Button,Col} from 'react-bootstrap'


class Buttons extends Component {
    componentDidMount() {
        console.log(this.audio)
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
      }
      
     componentWillUnmount() {
       document.removeEventListener('keydown', this.handleKeydown)
     }
     handleKeydown = e => {
        if(e.keyCode === this.props.data.keycode) {
          this.audio.volume=this.props.Volumns/100;
          this.audio.play()
        }
      }
      
      render() 
      { 

            return ( 
            <Col sm={4} >
                <Button style={{padding: "3rem",margin:"1rem"}}
                        onClick={() => this.props.onHandlePlay(this.props.data.url,this.props.Volumns,this.props.data.id)} 
                        tabIndex="0">
                        {this.props.data.letter}
                </Button>
                <audio id={this.props.data.letter}
                        className='clip'
                        src={this.props.data.url}
                        ref={ref => this.audio = ref}>
                </audio>
            </Col>
            )
      }
  }

export default Buttons;