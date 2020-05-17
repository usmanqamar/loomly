import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_CALENDARS } from './constants';
import { API_BASE, CALENDARS_LIST_API } from '../../utils/constants';
import { calendarsLoaded, calendarsLoadingError } from './actions';

export function* getCalendars() {
  const requestURL = `${API_BASE}${CALENDARS_LIST_API}`;

  // @TODO remove fake data
  const fake = {
    data: [
      {
        name: 'First Calendar',
      },
      {
        name: 'Second Calendar',
      },
    ]
  }

  try {
    const calendars = yield call(request, requestURL, fake);
    yield put(calendarsLoaded(calendars.data));
  } catch (err) {
    yield put(calendarsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* homeSaga() {
  yield takeLatest(FETCH_CALENDARS, getCalendars);
}
