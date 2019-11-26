import React, { Component } from 'react';
// import { CircleSlider } from "react-circle-slider";

class Volums extends Component {
 
    render() {
        const { volums,TToggle } = this.props.volums;
        if(TToggle===true){
        return (
            <>
            <p>
                Volumn
            </p>
            <input value={volums} 
                 type="range"
                 min="1" 
                 max="100" 
                 onChange={(e) => this.props.handleChangeVolums(e.target.value )}>
          </input>
          <div>{volums}</div>
            </>
        );}
        else {
            return (
                <>
                <input value={volums} 
                     type="range"
                     disabled 
                     min="1" 
                     max="100" 
                     >
              </input>
                </>
            );
        }
    }
}
export default Volums;