import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();


const rootStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default rootStore;

