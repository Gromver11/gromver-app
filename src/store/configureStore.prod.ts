import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import { api } from "../middleware/api";

export const configureStore = (): ReturnType<typeof createStore> => {
  return createStore(rootReducer, applyMiddleware(api));
};
