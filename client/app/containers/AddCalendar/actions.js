import {
  FETCH_CALENDAR,
  FETCH_CALENDAR_ERROR,
  FETCH_CALENDAR_SUCCESS,
  ADD_CALENDAR,
  ADD_CALENDAR_ERROR,
  ADD_CALENDAR_SUCCESS,
  CLEAR_ADD_CALENDAR,
  CONNECT_SOCIAL_ACCOUNT,
  CONNECT_SOCIAL_ACCOUNT_FAILURE,
  CONNECT_SOCIAL_ACCOUNT_SUCCESS,
  INVITE_USER,
  INVITE_USER_SUCCESS,
  INVITE_USER_FAILURE,
  FETCH_CALENDAR_USER,
  FETCH_CALENDAR_USER_FAILURE,
  FETCH_CALENDAR_USER_SUCCESS

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

export function connectAccount(payload) {
  return {
    type: CONNECT_SOCIAL_ACCOUNT,
    payload,
  };
}

export function accountConnected() {
  return {
    type: CONNECT_SOCIAL_ACCOUNT_SUCCESS,
  };
}

export function accountConnectingFailed(err) {
  return {
    type: CONNECT_SOCIAL_ACCOUNT_FAILURE,
    err,
  };
}

export function inviteUser(payload) {
  return {
    type: INVITE_USER,
    payload,
  };
}

export function userInvited(payload) {
  return {
    type: INVITE_USER_SUCCESS,
    payload,
  };
}

export function inviteUserFailed(err) {
  return {
    type: INVITE_USER_FAILURE,
    err,
  };
}

export function loadCalendarUser(payload) {
  return {
    type: FETCH_CALENDAR_USER,
    payload,
  };
}

export function calendarUserLoaded(payload) {
  return {
    type: FETCH_CALENDAR_USER_SUCCESS,
    payload,
  };
}

export function loadCalendarFailed(err) {
  return {
    type: FETCH_CALENDAR_USER_FAILURE,
    err,
  };
}
