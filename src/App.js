import React, { Component } from 'react'
import Buttons from "./components/Button";
import Volums from "./components/Volums";
import Toggle from "./components/Toggle";
import Input from "./components/ShowLetter";
import {ButtonToolbar,Button,Container,Row} from 'react-bootstrap'


class App extends Component {
  render () {
      console.log('asdsat',this.props.TToggle);
      console.log('volums',this.props.volums);
      console.log('Meesage',this.props.Messages);

    return (
      <div>
        <Toggle toggles={this.props} onHandleClick={() =>this.props.toggle()}></Toggle>
        <Volums volums={this.props} handleChangeVolums={this.props.Volumn}></Volums>
        <Input Massage={this.props.Messages}></Input>
        <Button onClick={() => this.props.fetch_()}>Show</Button>
          {this.props.loading 
            ? <p>Loading...</p> 
            : this.props.error
                ? <p>Error, try again</p>
                :<>
                  <ButtonToolbar >
                  <Container style={{width: "30%"}}>
                  <Row>{this.props.TToggle ? this.props.data.map((item,index)=>(
                        <Buttons key={index} data={item} onHandlePlay={this.props.Play} Volumns={this.props.volums}></Buttons>
                          ))
                          : <p>Error,notthing data</p>
                      }
                      </Row>
                    </Container>
                    </ButtonToolbar>
                  
                  </>
          }
      </div>
    )
  }
}
export default App;
