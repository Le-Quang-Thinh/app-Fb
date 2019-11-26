import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import App from './App'
import reducer from "./reducer";
import {bindActionCreators} from 'redux'
import { fetch_, toggle,Play,Volumn } from "./actions";
import watchFetch_ from "./saga"
  // Sagas


  
  // Store
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(watchFetch_);

  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      fetch_,
      toggle,
      Play,
      Volumn
    }, dispatch);
}

const mapStateToProps = state => {
  return  state;
};
  const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(App);


  // Container component
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedApp />
    </Provider>,
    document.getElementById('root')
  );