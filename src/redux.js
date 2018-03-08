// action types
const API_CALL_REQUEST = 'API_CALL_REQUEST'
const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
const API_CALL_FAILURE = 'API_CALL_FAILURE'

// reducer with initial state
const initialState = {
  payload: null,
  imagesList: null,
  error: null
}

export function reducer (state = initialState, action) {
  if (action.type === API_CALL_REQUEST) {
    return {
      ...state,
      error: null
    }
  } else if (action.type === API_CALL_SUCCESS) {
    console.log("received DATA")
    console.log(action.imagesList)
    return {
      ...state,
      imagesList: action.imagesList,
      error: null
    }
  } else if (action.type === API_CALL_FAILURE) {
    return {
      ...state,
      imagesList: null,
      error: action.error
    }
  } else { return state }
}
