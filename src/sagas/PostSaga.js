import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * WatcherPostSaga () {
  yield takeLatest('API_UPDATE_REQUEST', workerSaga)
}

// function that makes the api request and returns a Promise for response
function fetchImages (payload = null) {
  let url
  payload ? (url = 'http://localhost:3010/images/'+payload.id)
    : url = null

  return axios({
    method: 'put',
    url: url,
    data:{
      ...payload
    }
  })
}

// worker saga: makes the api call when watcher saga sees the action
function * workerSaga (action) {
  try {
    console.log(action.imageContent)
    const response = yield call(fetchImages, action.imageContent)
    const imagesList = response.data
    console.log(imagesList)
    // dispatch a success action to the store with the new dog
    yield put({type: 'API_UPDATE_SUCCESS'})
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({type: 'API_UPDATE_FAILURE'})
  }
}
