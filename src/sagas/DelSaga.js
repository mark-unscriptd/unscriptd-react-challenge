import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * WatcherDelSaga () {
  yield takeLatest('API_DEL_REQUEST', workerSaga)
}

// function that makes the api request and returns a Promise for response
function delImages (payload = null) {
  let url
  payload ? (url = 'http://localhost:3010/images' + payload)
    : (url = null)

  return axios({
    method: 'DELETE',
    url: url
  })
}

// worker saga: makes the api call when watcher saga sees the action
function * workerSaga (action) {
  try {
    console.log(action.payload)
    for (let i = 0; i < action.payload.length; i++) {
      console.log(action.payload[i] + 'Deleting')
      yield call(delImages, action.payload[i])
    }
    // dispatch a success action to the store with the new dog
    yield put({type: 'API_DEL_SUCCESS'})
    yield put({type: 'API_CALL_REQUEST'})
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({type: 'API_DEL_FAILURE'})
    yield put({type: 'API_CALL_REQUEST'})
  }
}
