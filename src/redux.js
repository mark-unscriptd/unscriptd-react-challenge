// action types
const API_CALL_REQUEST = 'API_CALL_REQUEST'
const API_CALL_SUCCESS = 'API_CALL_SUCCESS'
const API_CALL_FAILURE = 'API_CALL_FAILURE'
const API_UPDATE_FAILURE = 'API_UPDATE_FAILURE'
const API_UPDATE_SUCCESS = 'API_UPDATE_SUCCESS'
const ID_DEL_ADD_LIST = 'ID_DEL_ADD_LIST'
const ID_DEL_REMOVE_LIST = 'ID_DEL_REMOVE_LIST'
const API_DEL_REQUEST = 'API_DEL_REQUEST'
const API_DEL_SUCCESS = 'API_DEL_SUCCESS'
const API_DEL_FAILURE = 'API_DEL_FAILURE'
// reducer with initial state
const initialState = {
  postSuccess: null,
  imagesList: null,
  error: null,
  idDelList: []
}

export function reducer (state = initialState, action) {
  if (action.type === API_CALL_REQUEST) {
    return {
      ...state,
      error: null,
      postSuccess: null
    }
  } else if (action.type === API_CALL_SUCCESS) {
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
  } else if (action.type === ID_DEL_ADD_LIST) {
    return {
      ...state,
      idDelList: [...state.idDelList, action.payload]
    }
  } else if (action.type === ID_DEL_REMOVE_LIST) {
    return {
      ...state,
      idDelList: state.idDelList.filter(ele => action.payload !== ele)
    }
  } else if (action.type === API_DEL_SUCCESS) {
    return {
      ...state,
      idDelList: []
    }
  } else if (action.type === API_DEL_FAILURE) {
    return {
      ...state,
      idDelList: []
    }
  }else { return state }
}
