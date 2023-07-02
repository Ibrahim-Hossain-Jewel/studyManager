import { spawn } from "redux-saga/effects";
import navSaga from "./components/menubar/navSaga";
function* rootSaga () {
    yield spawn(navSaga);
}
export default rootSaga;