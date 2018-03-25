import {cloneableGenerator} from 'redux-saga/utils'
import {call, put} from 'redux-saga/effects'
import { workerSaga, fetchImages } from '../../sagas/PostSaga'
import {
  API_DEL_SUCCESS, API_CALL_REQUEST, API_DEL_FAILURE, API_DEL_REQUEST,
  API_UPDATE_SUCCESS, API_UPDATE_FAILURE
} from '../../actionTypes'
describe('Test Del Saga function Suite', () => {
  const action = {
    type: API_DEL_REQUEST,
    payload: [1, 2]
  }
  const iterator = cloneableGenerator(workerSaga)(action)

  it('+++ Post from the payload', () => {
    const expectedYield = call(fetchImages, action.payload)
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Post successfully', () => {
    const expectedYield = put({type: API_UPDATE_SUCCESS})
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })
  
  it('+++ Post Error Handle', () => {
    const expectedYield = put({type: API_UPDATE_FAILURE})
    const actualYield = iterator.throw('error').value
    expect(actualYield).toEqual(expectedYield)
  })
  
  it('+++ Post saga call finished', () => {
    const expectedYield = true
    const actualYield = iterator.next().done
    expect(actualYield).toEqual(expectedYield)
  })


})
