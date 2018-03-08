import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * watcherSaga () {
  yield takeLatest('API_CALL_REQUEST', workerSaga)
}

// function that makes the api request and returns a Promise for response
function fetchImages (payload = null) {
  let url = 'http://localhost:3010/images'
  return axios({
    method: 'get',
    url: url
  })
}

// worker saga: makes the api call when watcher saga sees the action
function * workerSaga (action) {
  try {
    const response = yield call(fetchImages, action.payload)
    console.log(response)
    const imageList = response.data
    console.log(imageList)
    // dispatch a success action to the store with the new dog
    yield put({ type: 'API_CALL_SUCCESS', imageList })
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'API_CALL_FAILURE', error })
  }
}
