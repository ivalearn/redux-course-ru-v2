import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/UserActions'

const initialState = {
  name: '',
  isFetching: false,
  error: '',
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' }
    case LOGIN_SUCCESS:
      return { ...state, isFetching: false, error: '', name: action.payload }
    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload }
    default:
      return state
  }
}
