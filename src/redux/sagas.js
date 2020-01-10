import { takeEvery, call, put, take } from "redux-saga/effects";

import { getAllDogsBreed, getDogBreed, getRandom } from "../DogApiServices";

function* getDogsList() {
  try {
    const List = yield call(getAllDogsBreed);
    const dogList = Object.keys(List);
    yield put({ type: "FETCHING_DATA_SUCCESSESED", payload: dogList });
  } catch (err) {
    yield put({ type: "FETCHING_DATA_ERROR", payload: err });
  }
};

function* getOneDog(name) {
  try {
    const dogImg = yield call(getDogBreed, name.breed);
    yield put({ type: "FETCHING_IMAGE_SUCCESSESED", payload: dogImg });
  } catch (err) {
    yield put({ type: "FETCHING_IMAGE_ERROR", payload: err });
  }
};

function* getRandomDog() {
  try {
    const randomDog = yield call(getRandom);
    let sliceBreed = randomDog.slice(30);
    let full = sliceBreed.indexOf("/");
    let breed = sliceBreed.slice(0, full);

    yield put({
      type: "FETCHING_RANDOM_SUCCESSESED",
      payload: [randomDog, breed]
    });
  } catch (err) {
    yield put({ type: "FETCHING_RANDOM_ERROR", payload: err });
  }
};



function* authorization() {
  
}









export default function* watcherSaga() {
  yield takeEvery("FETCHING_DATA", getDogsList);
  yield takeEvery("FETCHING_DATA_IMAGE", getOneDog);
  yield takeEvery("FETCHING_DATA_RANDOM", getRandomDog);
  yield take("LOGIN_REQUEST", authorization);
};
