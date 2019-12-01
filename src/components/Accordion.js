import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import React,{Component}  from 'react';
import ModalClock from './ModalClock';

 

class Example extends Component {
    render()
    { 
        const {todo,modal_Open} = this.props;
        console.log(todo);
        console.log(modal_Open);
    return (
      <><ModalClock onHandleClick={() =>this.props.modal_Open(todo.id)} modal={todo.modal} timeStart={todo.timeStart} pause={todo.stop} timeBonus={todo.timeBonus} text={todo.text}></ModalClock>
        <Accordion  style={{ color: "red" }} >
          
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey={todo.id}  onClick={() =>this.props.modal_Open(todo.id)}>
            <p className="text-success">{todo.text} </p>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey={todo.id}>
            <Card.Body>
            <Card.Title className="text-info">TimeStart : {todo.timeStart}</Card.Title>
            <Card.Text  className="text-danger">TimeBonus :{todo.timeBonus}</Card.Text>
            <Card.Text  className="text-warning">{todo.completed === true ? "(completed)" : ""}</Card.Text>
            
            </Card.Body>
            
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </>
    );
  }
}
  export default Example;