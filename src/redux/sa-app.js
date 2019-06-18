import { all, call, put, takeEvery } from 'redux-saga/effects';
import { APP_GET_DATA, APP_SUCCESS_GET_DATA } from '../ActionType'
import axios from 'axios';

export function* getDataas() {
  try {
    const data = yield call(function (){return axios.get('http://www.mocky.io/v2/5c9105cb330000112b649af8')
      .then((res) => {
        return res.data
      })
      .catch((err) => {
        return err
      })})
      yield put({ type: APP_SUCCESS_GET_DATA, furniture_styles: data.furniture_styles, products: data.products })
  } catch (err) {
    console.log("Login error", err)
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(APP_GET_DATA, getDataas),
  ])
}