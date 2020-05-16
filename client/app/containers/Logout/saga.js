import { put, takeLatest } from 'redux-saga/effects';
import { logoutSuccess } from '../Login/actions';
import { LOGOUT } from '../Login/constants';

export function* userLogout() {
  // @TODO remove fake data

  try {
    yield put(logoutSuccess());
  } catch (err) {
    // yield put(loginFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  yield takeLatest(LOGOUT, userLogout);
}
