import { DATA_ERROR, DATA_SUCCESS, DATA_REQUEST } from '../middleware/api';
const initialState = {
  isFetching: false,
  error: false,
  list: null,
  ids: [],
  totalPages: null,
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_REQUEST:
      return { ...state, isFetching: true };
    case DATA_SUCCESS:
      return {
        ...state,
        list: action.payload.entities.recievedForks,
        isFetching: false,
        ids: action.payload.result,
        totalPages: action.totalPages,
        error: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    default:
      return state;
  }
};
