import { API_REQUEST } from '../middleware/api';

export const fetchForks = (url, page = 1) => {
  return {
    [API_REQUEST]: {
      currentPage: `${page}`,
      currentRep: `${url}`,
    },
  };
};
