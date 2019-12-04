import React, { Component } from 'react'
import Table from './containers/Table'
import Modals from './components/modal'
import Hello from './datafirebase'
import Clock from './containers/ClockTimeOut'
// import Timer from './components/Clock'
class App extends Component {
  render()
  {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
          <Modals></Modals>
            <Table />
            <Clock></Clock>
 {/* <Hello></Hello> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
