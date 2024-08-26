import {
  GET_FORKS_ERROR,
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
} from '../types';
import type { State, Action } from '../../typings';

const initialState: State = {
  isFetching: false,
  error: false,
  list: null,
  ids: [],
  totalPages: null,
};
export const mainReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case GET_FORKS_REQUEST:
      return { ...state, isFetching: true };
    case GET_FORKS_SUCCESS:
      return {
        ...state,
        list: action.payload.forks.entities.recievedForks,
        isFetching: false,
        ids: action.payload.forks.result,
        totalPages: action.payload.totalPages,
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
