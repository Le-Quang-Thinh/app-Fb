import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class ModalClock extends Component {

    render() { 
        console.log(this.props.text);
        return ( 
            <div className="container" style={{marginLeft: "8.4%"}}>
            <Modal show={this.props.modal}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.text}</Modal.Title>
              </Modal.Header>
              <Modal.Body> 
                <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">

                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary"  onClick={this.props.onHandleClick}>
                  Close
                </Button>
                
              </Modal.Footer>
            </Modal>
          </div>
         );
    }
}
 
export default ModalClock;
