import { CommonAction } from '../../typings';
import { API_REQUEST } from '../middleware/api';

export const fetchForks = (url: string, page = 1): CommonAction => {
  return {
    [API_REQUEST]: {
      currentPage: `${page}`,
      currentRep: `${url}`,
    },
  };
};
