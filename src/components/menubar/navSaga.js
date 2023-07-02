// import { put, call } from "redux-saga/effects"; 
// import {
//     setAllPublicData
// } from "./action";
export function* getAllPublicData(){
  // try {
  //   const requestUrl = "http://localhost:8888/all/user";
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //       Authorization: "",
  //     },
  //   };
  //   const res = yield call ( () => fetch(requestUrl, options));
    
  //   const resData = yield res.json();
  //   console.log("your resData :" , resData ); 
  //   yield put(setAllPublicData(resData));
  // } catch (e) {
  //   console.log(e);
  // }
}

export default function* navSaga() {
  yield getAllPublicData();
}