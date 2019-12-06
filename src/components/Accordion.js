import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React,{PureComponent}  from 'react';
// import ModalClock from './ModalClock';

class Example extends PureComponent  {

  tick =(id) =>{
    this.props.StartCountDown(id)
    let intervalId ;
       intervalId = setInterval(() => {
      this.props.StartTick(id);
      // console.log(this.props.StartTick(id));
      if (this.props.stop) clearInterval(intervalId);
    }, 1000);
  }
  
    render()
    { 
        const {todo} = this.props;
    return (
      <>
      {/* <ModalClock onHandleClick={() =>this.props.modal_Open(todo.id)} onHandleTick={()=>this.props.StartTick(todo.id)} onHandleStart={() =>this.props.StartCountDown(todo.id)} modal={todo.modal}  minute={todo.minute} second={todo.second} pause={todo.stop} stops={todo.stop} text={todo.text}></ModalClock> */}
        <Accordion  style={{ color: "red",background: "red" }} >
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={todo.id}  >
            <p className="text-success">{todo.text} </p>
          </Accordion.Toggle>
          { (todo.second < 5 && todo.minute < 1 ) 
          
            ? <Accordion.Collapse eventKey={todo.id} style={{background: "red"}}> 
                <Card.Body>
                        <Card.Title className="text-info">TimeStart {todo.minute}:{todo.second }</Card.Title>
                        <Card.Text  className="text-warning">{todo.completed === true ? "(completed)" : ""}</Card.Text>
                    <Button variant="secondary"  onClick={() => this.tick(todo.id)}>
                      {(todo.stop) ? "Start" : "Pause"}
                    </Button>
                    {/* <Button variant="primary"  onClick={() =>this.props.modal_Open(todo.id)}>
                      Open Modal
                    </Button> */}
                </Card.Body>
               </Accordion.Collapse>
            : <Accordion.Collapse eventKey={todo.id} style={{ background: "white" }}> 
                <Card.Body>
                        <Card.Title className="text-info">TimeStart {todo.minute}:{todo.second }</Card.Title>
                        <Card.Text  className="text-warning">{todo.completed === true ? "(completed)" : ""}</Card.Text>
                    <Button variant="secondary"  onClick={() => this.tick(todo.id,todo.stop)}>
                      {(todo.stop) ? "Start" : "Pause"}
                    </Button>
                    {/* <Button variant="primary"  onClick={() =>this.props.modal_Open(todo.id)}>
                      Open Modal
                    </Button> */}
                </Card.Body>
              </Accordion.Collapse>
        }
         
        </Card>
      </Accordion>
      </>
    );
  }
}
  export default Example;