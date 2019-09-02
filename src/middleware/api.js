import axios from 'axios'

export const API_REQUEST = 'Api request'
const CallApi = url => {
  return axios.get(url)
}
const getPageCount = response => {
  const link = response.headers.link
  if (!link) {
    return null
  }
  const arrLink = link.split(';')[1]
  const result = arrLink.slice(arrLink.lastIndexOf('=') + 1, -1)
  return Number(result) + 1
}
const api = store => next => action => {
  if (!action[API_REQUEST]) {
    return next(action)
  }
  const actionWith = data => {
    const NewAction = Object.assign({}, action, data)
    delete NewAction[API_REQUEST]
    return NewAction
  }
  const [DATA_REQUEST, DATA_SUCCESS, DATA_ERROR] = action[API_REQUEST].types
  next(actionWith({ type: DATA_REQUEST }))
  const { URL } = action[API_REQUEST]
  return CallApi(URL).then(
    res =>
      next(
        actionWith({
          type: DATA_SUCCESS,
          payload: res.data,
          totalPageCount: getPageCount(res),
        })
      ),
    error =>
      next(
        actionWith({
          type: DATA_ERROR,
          payload: error.message,
        })
      )
  )
}

export default api
