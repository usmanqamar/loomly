import { put, takeLatest } from 'redux-saga/effects';
import { logoutSuccess } from '../App/actions';
import { LOGOUT } from '../App/constants';

export function* userLogout() {
  try {
    yield put(logoutSuccess());
  } catch (err) {}
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  yield takeLatest(LOGOUT, userLogout);
}
