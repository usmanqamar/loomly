import produce from 'immer';
import {
  FETCH_CALENDARS_SUCCESS,
  FETCH_CALENDARS_ERROR,
  FETCH_CALENDARS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  data: {
    calendars: [],
  },
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_CALENDARS:
        draft.loading = true;
        break;

      case FETCH_CALENDARS_SUCCESS:
        draft.loading = false;
        draft.data = { ...draft.data, calendars: action.payload };
        draft.error = null;
        break;

      case FETCH_CALENDARS_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.data = { ...draft.data, calendars: [] };
        break;
    }
  });

export default homeReducer;
