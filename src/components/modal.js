import React,{ useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import CreateTodo from '../containers/CreateTodo'

function Modals() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className="container" style={{marginLeft: "8.4%"}}>
        <Button variant="primary" onClick={handleShow} >
          Add pomodoro
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Pomodoro</Modal.Title>
          </Modal.Header>
          <Modal.Body> 
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo handleClick={handleClose}/>
            </div></Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </div>
    );
  }
  
export default Modals;