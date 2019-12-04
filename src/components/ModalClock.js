import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
class ModalClock extends Component {
      constructor(props) {
        super(props);
        this.state = {  }
      }
     
    render() 
    { 
        console.log(this.props.text);
        if(this.props.stops===false){
        setInterval(this.props.onHandleTick, 1000);
      }
        const {minute,second} = this.props;
        return ( 
            <div className="container" style={{marginLeft: "8.4%"}}>
            <Modal show={this.props.modal}>
              <Modal.Header>
                <Modal.Title>{this.props.text}</Modal.Title>
              </Modal.Header>
              <Modal.Body> 
                <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
                <div>
                  <div>Remaining time: {minute} : {second} </div>
                </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
               <Button variant="secondary"  onClick={this.props.onHandleClick}>
                  Close
                </Button>
                <Button variant="primary"  onClick={this.props.onHandleStart}>
                  Start
                </Button>
                
              </Modal.Footer>
            </Modal>
          </div>
         );
    }
}
 
export default ModalClock;
