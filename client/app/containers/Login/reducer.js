import produce from 'immer';
import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  data: null,
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.loading = true;
        draft.error = null;
        draft.data = null;
        break;

      case LOGIN_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
        break;

      case LOGIN_FAILURE:
        draft.loading = false;
        draft.error = action.err;
        draft.data = null;
        break;

      case LOGOUT_SUCCESS:
        draft.loading = false;
        draft.error = action.err;
        draft.data = null;
        break;
    }
  });

export default userReducer;
