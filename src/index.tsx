import { configureStoreDev } from "./store/configureStore.dev";
import { configureStore } from "./store/configureStore.prod";
import { Provider } from "react-redux";
import { Route, HashRouter } from "react-router-dom";
import "./index.css";
import React from "react";
import { TableOfResults, UserForm, Paginate } from "./components";
import { createRoot } from "react-dom/client";

const store =
  process.env.NODE_ENV === "production"
    ? configureStore()
    : configureStoreDev();

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <HashRouter>
      <div className="main-content">
        <Route path="/" component={UserForm} />
        <Route path="/:info" component={TableOfResults} />
        <Route path="/:info" component={Paginate} />
      </div>
    </HashRouter>
  </Provider>,
);
