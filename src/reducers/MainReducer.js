import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from '../middleware/api'
const initialState = {
  isFetching: false,
  error: null,
  list: null,
  ids: [],
  currentPage: null,
  totalPages: null,
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
        ids: action.payload.result,
        currentPage: action.currentPage,
        totalPages: action.totalPages,
        currentRep: action.currentRep,
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
