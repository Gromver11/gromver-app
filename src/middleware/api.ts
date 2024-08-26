import axios, {type AxiosResponse} from 'axios'
import  type { Middleware, AnyAction } from 'redux'
import { normalize, schema } from 'normalizr';
import { omit } from 'ramda';
import {
  GET_FORKS_ERROR,
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
} from '../types';
import { Action, ActionWithData, CommonAction, State } from '../../typings';


const isAnyAction = (action: AnyAction | CommonAction): action is AnyAction => {
  return !action[API_REQUEST]
}

export const API_REQUEST = 'Api request';
const BASE_URL = 'https://api.github.com/repos/';
const user = new schema.Entity('recievedForks',  undefined, { idAttribute: 'id' });
const callApi = (endpoint:string, page: string) => {
  const fullUrl =
    endpoint.indexOf(BASE_URL) === -1
      ? BASE_URL + endpoint + `/forks?page=${page}&per_page=20`
      : endpoint + `/forks?page=${page}&per_page=20`;
  return axios.get(fullUrl);
};
const getPagesCount = (response:AxiosResponse): State['totalPages'] => {
  const links: string[] | undefined =  response.headers.link?.split(',');
  const lastPage = links?.find(link => link.indexOf('rel="last"') > -1);
  const prevPage = links?.find(link => link.indexOf('rel="prev"') > -1);
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
  return null
};
const api:Middleware<{}, State> = _ => next => (action: AnyAction | CommonAction )=> {
  if (isAnyAction(action)) {
    return next(action);
  }
  const actionWith = (data: ActionWithData): Action => {
    const newAction: AnyAction & ActionWithData | CommonAction & ActionWithData = Object.assign({}, action, data);
    return omit([API_REQUEST], newAction);
  };
  next(actionWith({ type: GET_FORKS_REQUEST }));
  const { currentRep, currentPage } = action[API_REQUEST];
  return callApi(currentRep, currentPage)
    .then(res =>
      next(
        actionWith({
          type: GET_FORKS_SUCCESS,
          payload:  {
            forks: normalize(res.data, [user]),
            totalPages: getPagesCount(res),
          },
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
