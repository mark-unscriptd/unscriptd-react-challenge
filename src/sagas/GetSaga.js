import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * WatcherGetSaga () {
  yield takeLatest('API_CALL_REQUEST', workerSaga)
}

// function that makes the api request and returns a Promise for response
function fetchImages (payload = null) {
  let url
  payload ? (url = 'http://localhost:3010/images/' + payload)
    : url = 'http://localhost:3010/images'
  console.log(url)
  return axios({
    method: 'get',
    url: url
  })
}

function reconstructData (imagesList) {
  let reImagesList = imagesList.map(ele => {
    return {
      ...ele,
      imageThumb: ele.display_sizes[2].uri,
      imageComp: ele.display_sizes[0].uri
    }
  })
  return reImagesList
}
// worker saga: makes the api call when watcher saga sees the action
function * workerSaga (action) {
  try {
    const response = yield call(fetchImages, action.payload)
    const imagesList = reconstructData(response.data)
    // dispatch a success action to the store with the new dog
    yield put({ type: 'API_CALL_SUCCESS', imagesList })
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'API_CALL_FAILURE', error })
  }
}
