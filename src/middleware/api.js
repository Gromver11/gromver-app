import axios from 'axios';
import { normalize, schema } from 'normalizr';
import * as R from 'ramda';
import {
  GET_FORKS_ERROR,
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
} from '../types/index';

export const API_REQUEST = 'Api request';
const BASE_URL = 'https://api.github.com/repos/';
const user = new schema.Entity('recievedForks', { idAttribute: 'id' });
const callApi = (endpoint, page) => {
  const fullUrl =
    endpoint.indexOf(BASE_URL) === -1
      ? BASE_URL + endpoint + `/forks?page=${page}&per_page=20`
      : endpoint + `/forks?page=${page}&per_page=20`;
  return axios.get(fullUrl);
};
const getPagesCount = response => {
  const link = response.headers.link;
  if (!link) {
    return null;
  }
  const links = link.split(',');
  const lastPage = links.find(s => s.indexOf('rel="last"') > -1);
  const prevPage = links.find(s => s.indexOf('rel="prev"') > -1);
  if (lastPage) {
    return Number(
      lastPage
        .trim()
        .split('=')[1]
        .slice(0, -9)
    );
  }
  if (!lastPage && prevPage) {
    return (
      Number(
        prevPage
          .trim()
          .split('=')[1]
          .slice(0, -9)
      ) + 1
    );
  }
};
const api = store => next => action => {
  if (!action[API_REQUEST]) {
    return next(action);
  }
  const actionWith = data => {
    const NewAction = Object.assign({}, action, data);
    return R.omit([API_REQUEST], NewAction);
  };
  next(actionWith({ type: GET_FORKS_REQUEST }));
  const { currentRep, currentPage } = action[API_REQUEST];
  return callApi(currentRep, currentPage)
    .then(res =>
      next(
        actionWith({
          type: GET_FORKS_SUCCESS,
          payload: normalize(res.data, [user]),
          totalPages: getPagesCount(res),
        })
      )
    )
    .catch(error =>
      next(
        actionWith({
          type: GET_FORKS_ERROR,
          payload: error.message,
        })
      )
    );
};

export default api;
