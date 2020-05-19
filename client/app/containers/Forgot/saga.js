import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SUBMIT_FORGOT } from './constants';
import { API_BASE, FORGOT_API } from '../../utils/constants';
import { submitForgotError, submitForgotSuccess } from './actions';

export function* submitForgot({ payload }) {
  const requestURL = `${API_BASE}${FORGOT_API}`;
  const { username } = payload;

  // @TODO remove fake data
  const fake = {
    username,
  };

  try {
    yield call(request, requestURL, fake, 'GET');
    yield put(submitForgotSuccess());
  } catch (err) {
    yield put(submitForgotError(err));
  }
}

export default function* forgotSaga() {
  yield takeLatest(SUBMIT_FORGOT, submitForgot);
}
