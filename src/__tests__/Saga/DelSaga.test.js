import {cloneableGenerator} from 'redux-saga/utils'
import {call, put} from 'redux-saga/effects'
import { workerSaga, delImages } from '../../sagas/DelSaga'
import {
  API_DEL_SUCCESS, API_CALL_REQUEST, API_DEL_FAILURE, API_DEL_REQUEST,
  API_CALL_FAILURE
} from '../../actionTypes'
describe('Test Del Saga function Suite', () => {
  const action = {
    type: API_DEL_REQUEST,
    payload: [1, 2]
  }
  const iterator = cloneableGenerator(workerSaga)(action)

  it('+++ Del the first element from the payload', () => {
    const expectedYield = call(delImages, action.payload[0])
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Del the second element from the payload', () => {
    const expectedYield = call(delImages, action.payload[1])
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Del successfully', () => {
    const expectedYield = put({type: API_DEL_SUCCESS})
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Refresh the page by calling data again', () => {
    const expectedYield = put({type: API_CALL_REQUEST})
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Del saga call finished', () => {
    const expectedYield = true
    const actualYield = iterator.next().done
    expect(actualYield).toEqual(expectedYield)
  })
})
