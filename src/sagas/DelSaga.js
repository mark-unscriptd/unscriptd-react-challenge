import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {API_DEL_SUCCESS, API_CALL_REQUEST, API_DEL_FAILURE, API_DEL_REQUEST} from '../actionTypes'
// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * WatcherDelSaga () {
  yield takeLatest(API_DEL_REQUEST, workerSaga)
}

// function that makes the api request and returns a Promise for response
export function delImages (payload = null) {
  let url
  payload ? (url = 'http://localhost:3010/images' + payload)
    : (url = null)

  return axios({
    method: 'DELETE',
    url: url
  })
}

// worker saga: makes the api call when watcher saga sees the action
export function * workerSaga (action) {
  try {
    for (let i = 0; i < action.payload.length; i++) {
      yield call(delImages, action.payload[i])
    }
    // dispatch a success action to the store with the new dog
    yield put({type: API_DEL_SUCCESS})
    yield put({type: API_CALL_REQUEST})
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({type: API_DEL_FAILURE})
    yield put({type: API_CALL_REQUEST})
  }
}
