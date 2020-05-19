import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { ADD_CALENDAR, FETCH_CALENDAR } from './constants';
import {
  ADD_CALENDAR_API,
  API_BASE,
  GET_CALENDAR_API,
} from '../../utils/constants';
import { calendarAdded, calendarAddingError, calendarLoaded } from './actions';
import { calendarsLoadingError } from '../Home/actions';

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

export function* loadCalendar() {
  const requestURL = `${API_BASE}${GET_CALENDAR_API}`;

  // @TODO remove fake data
  const fake = {
    id: 11,
    accounts: { FB: { connected: true, page: { name: 'Test Page' } } },
  };

  try {
    const calendar = yield call(request, requestURL, fake);
    yield put(calendarLoaded(calendar));
  } catch (err) {
    yield put(calendarsLoadingError(err));
  }
}

export default function* addCalendarSaga() {
  yield takeLatest(ADD_CALENDAR, addCalendar);
  yield takeLatest(FETCH_CALENDAR, loadCalendar);
}
