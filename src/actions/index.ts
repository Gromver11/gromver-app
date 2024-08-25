import { API_REQUEST } from '../middleware/api';

export const fetchForks = (url: string, page = 1) => {
  return {
    [API_REQUEST]: {
      currentPage: `${page}`,
      currentRep: `${url}`,
    },
  };
};
