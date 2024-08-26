import {
  GET_FORKS_ERROR,
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
} from '../types/index';
const initialState= {
  isFetching: false,
  error: false,
  list: null,
  ids: [],
  totalPages: null,
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORKS_REQUEST:
      return { ...state, isFetching: true };
    case GET_FORKS_SUCCESS:
      return {
        ...state,
        list: action.payload.entities.recievedForks,
        isFetching: false,
        ids: action.payload.result,
        totalPages: action.totalPages,
        error: false,
      };
    case GET_FORKS_ERROR:
      return {
        ...state,
        error: true,
        isFetching: false,
      };
    default:
      return state;
  }
};
