import { all } from 'redux-saga/effects';
import App from './redux/sa-app';
export default function* rootSaga(getState) {
  yield all([
    App()
  ]);
}
