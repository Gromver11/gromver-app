import { API_REQUEST } from '../middleware/api'

export const DATA_REQUEST = 'DATA REQUEST'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_ERROR = 'DATA_ERROR'

export const dataFetch = url => {
  return {
    [API_REQUEST]: {
      URL: `https://api.github.com/repos/${url}/forks`,
      types: [DATA_REQUEST, DATA_SUCCESS, DATA_ERROR],
    },
  }
}
