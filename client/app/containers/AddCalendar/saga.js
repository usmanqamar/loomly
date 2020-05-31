import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import {
  ADD_CALENDAR,
  CONNECT_SOCIAL_ACCOUNT,
  FETCH_CALENDAR,
  FETCH_CALENDAR_USER,
  INVITE_USER,
} from './constants';
import {
  ADD_CALENDAR_API,
  API_BASE,
  EDIT_CALENDAR_API,
  GET_CALENDAR_API,
  INVITE_USER_API,
} from '../../utils/constants';
import {
  accountConnected,
  accountConnectingFailed,
  calendarAdded,
  calendarAddingError,
  calendarLoaded,
  calendarLoadingError,
  inviteUserFailed,
  userInvited,
} from './actions';

export function* addCalendar() {
  const requestURL = `${API_BASE}${ADD_CALENDAR_API}`;

  // @TODO remove fake data
  const fake = { id: 11 };

  try {
    const calendar = yield call(request, requestURL, fake);
    yield put(calendarAdded(calendar));
  } catch (err) {
    yield put(calendarAddingError(err));
  }
}

export function* connectSocialAccount({ payload }) {
  const requestURL = `${API_BASE}${EDIT_CALENDAR_API}`;

  // @TODO remove fake data
  const fake = {
    social: {
      payload,
    },
  };

  try {
    yield call(request, requestURL, fake);
    yield put(accountConnected());
  } catch (err) {
    yield put(accountConnectingFailed(err));
  }
}

export function* loadCalendar() {
  const requestURL = `${API_BASE}${GET_CALENDAR_API}`;

  // @TODO remove fake data
  const fake = {
    id: 11,
    name: 'Test',
    users: [{ fullName: 'Usman Qamar' },{ fullName: 'Usman Qamar 2' }],
    accounts: { FB: { connected: true, page: { name: 'Test Page' } } },
  };

  try {
    const calendar = yield call(request, requestURL, fake);
    yield put(calendarLoaded(calendar));
  } catch (err) {
    //yield put(calendarLoadingError(err));
    yield put(calendarLoaded(fake));

  }
}

export function* inviteUser({ payload }) {
  const requestURL = `${API_BASE}${INVITE_USER_API}`;

  // @TODO remove fake data
  const fake = payload;

  try {
    const data = yield call(request, requestURL, fake);
    yield put(userInvited(data));
  } catch (err) {
    yield put(inviteUserFailed(err));
  }
}

export default function* addCalendarSaga() {
  yield takeLatest(ADD_CALENDAR, addCalendar);
  yield takeLatest(FETCH_CALENDAR, loadCalendar);
  yield takeLatest(CONNECT_SOCIAL_ACCOUNT, connectSocialAccount);
  yield takeLatest(INVITE_USER, inviteUser);
}
