import produce from 'immer';
import {
  SUBMIT_FORGOT_SUCCESS,
  SUBMIT_FORGOT_ERROR,
  SUBMIT_FORGOT,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const forgotReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SUBMIT_FORGOT:
        draft.loading = true;
        break;

      case SUBMIT_FORGOT_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;

      case SUBMIT_FORGOT_ERROR:
        draft.loading = false;
        draft.error = action.err;
        break;
    }
  });

export default forgotReducer;
