import {
  FETCH_CALENDAR,
  FETCH_CALENDAR_ERROR,
  FETCH_CALENDAR_SUCCESS,
  ADD_CALENDAR,
  ADD_CALENDAR_ERROR,
  ADD_CALENDAR_SUCCESS,
  CLEAR_ADD_CALENDAR,
} from './constants';

export function addCalendar(payload) {
  return {
    type: ADD_CALENDAR,
    payload,
  };
}

export function calendarAdded(payload) {
  return {
    type: ADD_CALENDAR_SUCCESS,
    payload,
  };
}

export function calendarAddingError(err) {
  return {
    type: ADD_CALENDAR_ERROR,
    err,
  };
}

export function loadCalendar() {
  return {
    type: FETCH_CALENDAR,
  };
}

export function calendarLoaded(payload) {
  return {
    type: FETCH_CALENDAR_SUCCESS,
    payload,
  };
}

export function calendarLoadingError(err) {
  return {
    type: FETCH_CALENDAR_ERROR,
    err,
  };
}

export function clearAddCalendar() {
  return {
    type: CLEAR_ADD_CALENDAR,
  };
}
