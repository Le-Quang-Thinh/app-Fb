
import React, { Component } from "react";
import List from './component/List'
import {Provider} from 'react-redux'
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
       <List></List>
    </Provider>
  );
}
export default App;