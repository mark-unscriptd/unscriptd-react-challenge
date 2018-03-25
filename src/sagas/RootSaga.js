import { fork, all } from 'redux-saga/effects'
import { WatcherGetSaga } from './GetSaga'
import { WatcherPostSaga } from './PostSaga'
import { WatcherDelSaga } from './DelSaga'

export function * rootSaga () {
  yield all([
    fork(WatcherGetSaga),
    fork(WatcherPostSaga),
    fork(WatcherDelSaga)
  ])
}
