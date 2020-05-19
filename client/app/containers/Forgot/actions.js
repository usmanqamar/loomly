import {
  SUBMIT_FORGOT,
  SUBMIT_FORGOT_ERROR,
  SUBMIT_FORGOT_SUCCESS,
} from './constants';

export function submitForgot(payload) {
  return {
    type: SUBMIT_FORGOT,
    payload
  };
}

export function submitForgotSuccess() {
  return {
    type: SUBMIT_FORGOT_SUCCESS,
  };
}

export function submitForgotError(err) {
  return {
    type: SUBMIT_FORGOT_ERROR,
    err,
  };
}
