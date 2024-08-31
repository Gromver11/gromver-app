import {
  GET_FORKS_ERROR,
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
} from "../constants";
import type { State, Action } from "../typings";

const initialState: State = {
  isLoading: false,
  isError: false,
  forks: null,
  ids: [],
  totalPages: null,
};
export const mainReducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case GET_FORKS_REQUEST:
      return { ...state, isLoading: true };
    case GET_FORKS_SUCCESS:
      return {
        ...state,
        forks: action.payload.forks.entities.recievedForks,
        isLoading: false,
        ids: action.payload.forks.result,
        totalPages: action.payload.totalPages,
        isError: false,
      };
    case GET_FORKS_ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false,
        ids: [],
        forks: null,
        totalPages: null,
      };
    default:
      return state;
  }
};
