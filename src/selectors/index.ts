import { path } from 'ramda';
import { State } from '../../typings';

export const selectTotalPages = path<State['totalPages']>(['mainReducer', 'totalPages']);

export const selectError = path<State['error']>(['mainReducer', 'error']);

export const selectIsFetchingState = path(['mainReducer', 'isFetching']);

export const selectIds = path<State['ids']>(['mainReducer', 'ids']);

export const selectList = path<State['list']>(['mainReducer', 'list']);
