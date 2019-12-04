import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React,{Component}  from 'react';
import ModalClock from './ModalClock';


class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { intervalId: 0 }
  }
  tick =(id,stop) =>{
    this.props.StartCountDown(id)
    let intervalId ;
       intervalId = setInterval(() => {
      this.props.StartTick(id)
    }, 1000);
    // else {
    //   clearInterval(this.state.intervalId);
    // }
    this.setState({ intervalId: intervalId });
  }
  
    render()
    { 
        const {todo} = this.props;
        console.log('second',todo.second);
        console.log('minute',todo.minute);
    return (
      <>
      {/* <ModalClock onHandleClick={() =>this.props.modal_Open(todo.id)} onHandleTick={()=>this.props.StartTick(todo.id)} onHandleStart={() =>this.props.StartCountDown(todo.id)} modal={todo.modal}  minute={todo.minute} second={todo.second} pause={todo.stop} stops={todo.stop} text={todo.text}></ModalClock> */}
        <Accordion  style={{ color: "red" }} >
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={todo.id}  >
            <p className="text-success">{todo.text} </p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={todo.id}>
            <Card.Body>
                    <Card.Title className="text-info">TimeStart {todo.minute}:{todo.second }</Card.Title>
                    <Card.Text  className="text-warning">{todo.completed === true ? "(completed)" : ""}</Card.Text>
               <Button variant="secondary"  onClick={(todo.stop )? () =>this.props.StartCountDown(todo.id) : ()=>this.props.StartTick(todo.id)}>
                Start/Pause
                </Button>
                <Button variant="primary"  onClick={() => this.tick(todo.id,todo.stop)}>
                  Start
                </Button>
                <Button variant="primary"  onClick={() =>this.props.modal_Open(todo.id)}>
                  Open Modal
                </Button>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </>
    );
  }
}
  export default Example;