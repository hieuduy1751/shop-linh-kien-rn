import { all } from 'redux-saga/effects'
import user from './user/sagas'
export default function* sagas() {
  yield all([
    user(),
  ]);
}