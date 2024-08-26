import type { Middleware, AnyAction } from 'redux';
import { normalize, schema } from 'normalizr';
import { omit } from 'ramda';
import {
  GET_FORKS_ERROR,
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
  API_REQUEST,
} from '../constants';
import type {
  Action,
  ActionWithData,
  CommonAction,
  State,
} from '../../typings';
import { callApi, getPagesCount, isAnyAction } from '../utils';

const user = new schema.Entity('recievedForks', undefined, {
  idAttribute: 'id',
});

export const api: Middleware<unknown, State> =
  () => (next) => (action: AnyAction | CommonAction) => {
    if (isAnyAction(action)) {
      return next(action);
    }
    const actionWith = (data: ActionWithData): Action => {
      const newAction:
        | (AnyAction & ActionWithData)
        | (CommonAction & ActionWithData) = Object.assign({}, action, data);
      return omit([API_REQUEST], newAction);
    };
    next(actionWith({ type: GET_FORKS_REQUEST }));
    const { currentRep, currentPage } = action[API_REQUEST];
    return callApi(currentRep, currentPage)
      .then((res) =>
        next(
          actionWith({
            type: GET_FORKS_SUCCESS,
            payload: {
              forks: normalize(res.data, [user]),
              totalPages: getPagesCount(res),
            },
          }),
        ),
      )
      .catch((error) =>
        next(
          actionWith({
            type: GET_FORKS_ERROR,
            payload: error.message,
          }),
        ),
      );
  };
