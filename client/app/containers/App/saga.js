import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { LOGIN } from './constants';
import { API_BASE, LOGIN_API } from '../../utils/constants';
import { loginFailure, loginSuccess } from './actions';

export function* userLogin({ payload }) {
  // eslint-disable-next-line no-unused-vars
  const { user, password } = payload;

  const requestURL = `${API_BASE}${LOGIN_API}`;

  // @TODO remove fake data
  const fake = {
    firstName: 'Usman',
    lastName: 'Qamar',
    email: 'usman@hotmail.com',
    role: 'SuperAdmin',
  };
  try {
    const images = yield call(request, requestURL, fake);
    yield put(loginSuccess(images));
  } catch (err) {
    yield put(loginFailure(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* userSaga() {
  yield takeLatest(LOGIN, userLogin);
}
