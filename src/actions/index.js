import { API_REQUEST } from '../middleware/api'

export const dataFetch = (url, page = 1) => {
  return {
    [API_REQUEST]: {
      currentPage: `${page}`,
      currentRep: `${url}`,
    },
  }
}
