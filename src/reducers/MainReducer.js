import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from '../actions/index'
const initialState = {
  isFetching: false,
  error: null,
  list: null,
  totalPageCount: 0,
  elementPerPage: 30,
}
export const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, isFetching: true }
    case DATA_SUCCESS:
      return {
        ...state,
        list: action.payload.entities.recievedForks,
        isFetching: false,
        totalPageCount: action.totalPageCount,
      }
    case DATA_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    default:
      return state
  }
}
