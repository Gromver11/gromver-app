import { path } from 'ramda';

export const selectTotalPages = path(['mainReducer', 'totalPages']);

export const selectError = path(['mainReducer', 'error']);

export const selectIsFetchingState = path(['mainReducer', 'isFetching']);

export const selectIds = path(['mainReducer', 'ids']);

export const selectList = path(['mainReducer', 'list']);
