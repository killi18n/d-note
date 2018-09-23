import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";

import { rootReducers, rootEpics } from "./modules";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

export default createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpics);
