import axios from 'axios'

export const API_REQUEST = 'Api request'
const CallApi = url => {
  return axios.get(url)
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
