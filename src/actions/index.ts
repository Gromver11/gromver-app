import { CommonAction } from './../typings';
import { API_REQUEST } from '../constants';

export const fetchForks = (url: string, page = 1): CommonAction => {
  return {
    [API_REQUEST]: {
      currentPage: `${page}`,
      currentRepository: `${url}`,
    },
  };
};
