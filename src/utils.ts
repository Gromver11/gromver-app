import type { AnyAction } from "redux";
import { API_REQUEST, BASE_URL } from "./constants";
import type { CommonAction, Fork, State } from "./typings";
import axios, { type AxiosResponse } from "axios";
import { path } from "ramda";

export const isAnyAction = (
  action: AnyAction | CommonAction,
): action is AnyAction => {
  return !action[API_REQUEST];
};

export const getPagesCount = (response: AxiosResponse): State["totalPages"] => {
  const links: string[] | undefined = response.headers.link?.split(",");
  const lastPage = links?.find((link) => link.indexOf('rel="last"') > -1);
  const prevPage = links?.find((link) => link.indexOf('rel="prev"') > -1);
  if (lastPage) {
    return Number(lastPage.trim().split("=")[1].slice(0, -9));
  }
  if (!lastPage && prevPage) {
    return Number(prevPage.trim().split("=")[1].slice(0, -9)) + 1;
  }
  return null;
};

export const callApi = (
  endpoint: string,
  page: string,
): Promise<AxiosResponse<Record<string, Fork>>> => {
  const fullUrl =
    endpoint.indexOf(BASE_URL) === -1
      ? BASE_URL + endpoint + `/forks?page=${page}&per_page=20`
      : endpoint + `/forks?page=${page}&per_page=20`;
  return axios.get(fullUrl);
};

export const selectTotalPages = path<State["totalPages"]>([
  "mainReducer",
  "totalPages",
]);

export const selectIsErrorState = path<State["isError"]>([
  "mainReducer",
  "isError",
]);

export const selectIsLoadingState = path<State["isLoading"]>([
  "mainReducer",
  "isLoading",
]);

export const selectIds = path<State["ids"]>(["mainReducer", "ids"]);

export const selectForks = path<State["forks"]>(["mainReducer", "forks"]);
