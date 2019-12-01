import React, { Component } from 'react'
import Table from './containers/Table'
import Modals from './components/modal'
import Clock from './containers/ClockTimeOut'
class App extends Component {
  render()
  {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "80px"}} >
          <div className="row">
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
