// action types
const API_CALL_REQUEST = 'API_CALL_REQUEST'
const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
const API_CALL_FAILURE = 'API_CALL_FAILURE'
const API_UPDATE_FAILURE = 'API_UPDATE_FAILURE'
const API_UPDATE_SUCCESS = 'API_UPDATE_SUCCESS'

// reducer with initial state
const initialState = {
  postSuccess: null,
  imagesList: null,
  error: null
}

export function reducer (state = initialState, action) {
  if (action.type === API_CALL_REQUEST) {
    return {
      ...state,
      error: null,
      postSuccess: null
    }
  } else if (action.type === API_CALL_SUCCESS) {
    console.log('received DATA')
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
  } else if (action.type === API_UPDATE_SUCCESS) {
    return {
      ...state,
      postSuccess: 1
    }
  } else if (action.type === API_UPDATE_FAILURE) {
    return {
      ...state,
      postSuccess: 0
    }
  } else { return state }
}
