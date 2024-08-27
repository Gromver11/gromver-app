import { API_REQUEST } from './src/constants';
import {
  GET_FORKS_REQUEST,
  GET_FORKS_ERROR,
  GET_FORKS_SUCCESS,
} from './src/constants';

export type Fork = {
  id: string;
  full_name: string;
  owner: {
    login: string;
  };
  stargazers_count: string;
  html_url: string;
};

export type State = {
  isLoading: boolean;
  isError: boolean;
  totalPages: number | null;
  forks: Record<string, Fork> | null;
  ids: string[];
};

export type ActionLoading = {
  type: typeof GET_FORKS_REQUEST;
};

export type ActionError = {
  type: typeof GET_FORKS_ERROR;
  payload: string;
};

export type ActionSuccess = {
  type: typeof GET_FORKS_SUCCESS;
  payload: {
    totalPages: number | null;
    forks: {
      result: string[];
      entities: {
        recievedForks: Record<string, Fork>;
      };
    };
  };
};

export type Action = ActionLoading | ActionError | ActionSuccess;

export type ActionWithData = {
  type:
    | typeof GET_FORKS_REQUEST
    | typeof GET_FORKS_ERROR
    | typeof GET_FORKS_SUCCESS;
  payload?: ActionError['payload'] | ActionSuccess['payload'];
};

export type CommonAction = {
  [API_REQUEST]: {
    currentRepository: string;
    currentPage: string;
  };
};
