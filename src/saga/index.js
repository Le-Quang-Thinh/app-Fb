
import {request_,request_Success,request_Error} from "../actions"
import { put, takeEvery, call } from 'redux-saga/effects'

function* watchFetch_() {
    yield takeEvery('FETCHED', fetch_Async);
  }

  function* fetch_Async() {
    try {
      yield put(request_());
      const data = yield call(() => {
        return fetch('http://localhost:3000/ListOfItems')
                .then(res => res.json())
        }
      );
        console.log(data);
      yield put(request_Success(data));
    } catch (error) {
      yield put(request_Error());
    }
  }

  export default watchFetch_;