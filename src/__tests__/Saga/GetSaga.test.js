import {cloneableGenerator} from 'redux-saga/utils'
import {call, put} from 'redux-saga/effects'
import { workerSaga, fetchImages, reconstructData } from '../../sagas/GetSaga'
import {
  API_DEL_SUCCESS, API_CALL_REQUEST, API_DEL_FAILURE, API_DEL_REQUEST,
  API_CALL_SUCCESS, API_CALL_FAILURE, API_UPDATE_FAILURE
} from '../../actionTypes'
describe('Test Del Saga function Suite', () => {
  const action = {
    type: API_CALL_REQUEST,
    payload: [1, 2, 3]
  }
  const imagesList = []

  const response = {
    data: [{}]

  }
  const error = 'error'
  const iterator = cloneableGenerator(workerSaga)(action)

  it('+++ Get the ImageList from the payload', () => {
    const expectedYield = call(fetchImages, action.payload)
    const actualYield = iterator.next().value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Get Data reformed', () => {
    const expectedYield = call(reconstructData, response.data)
    const actualYield = iterator.next(response).value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Get Data success', () => {
    const expectedYield = put({ type: API_CALL_SUCCESS, imagesList })
    const actualYield = iterator.next(imagesList).value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Get Error Handle', () => {
    const expectedYield = put({ type: API_CALL_FAILURE, error })
    const actualYield = iterator.throw('error').value
    expect(actualYield).toEqual(expectedYield)
  })

  it('+++ Get saga call finished', () => {
    const expectedYield = true
    const actualYield = iterator.next().done
    expect(actualYield).toEqual(expectedYield)
  })
})
