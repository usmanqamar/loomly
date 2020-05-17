import produce from 'immer';
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  user: null,
};

/* eslint-disable default-case, no-param-reassign */
const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.loading = true;
        draft.error = null;
        draft.user = null;
        break;

      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.user = action.payload;
        break;

      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.err;
        draft.user = null;
        break;

      case LOGOUT_SUCCESS:
        draft.loading = false;
        draft.error = action.err;
        draft.user = null;
        break;
    }
  });

export default globalReducer;
