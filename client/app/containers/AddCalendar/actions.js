import {
  FETCH_CALENDARS,
  FETCH_CALENDARS_ERROR,
  FETCH_CALENDARS_SUCCESS,
} from './constants';

export function loadCalendars() {
  return {
    type: FETCH_CALENDARS,
  };
}

export function calendarsLoaded(payload) {
  return {
    type: FETCH_CALENDARS_SUCCESS,
    payload,
  };
}

export function calendarsLoadingError(err) {
  return {
    type: FETCH_CALENDARS_ERROR,
    err,
  };
}
