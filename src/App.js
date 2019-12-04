import React, { Component } from 'react'
import Table from './containers/Table'
import Modals from './components/modal'
import Clock from './containers/ClockTimeOut'
import Timer from './components/Clock'
class App extends Component {
  render()
  {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
            <Timer></Timer>
          <Modals></Modals>
            <Table />
            {/* <Countdown date={`${year}-12-24T00:00:00`} /> */}
            <Clock></Clock>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
