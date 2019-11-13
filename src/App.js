
import React, { Component } from "react";
import List from './List'
import {Provider} from 'react-redux'
import store from './store';
function App() {
  return (
    <Provider store={store}>
       <List></List>
    </Provider>
  );
}
export default App;