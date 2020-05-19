import produce from 'immer';
import {
  ADD_CALENDAR_SUCCESS,
  ADD_CALENDAR_ERROR,
  ADD_CALENDAR,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SUCCESS,
  FETCH_CALENDAR_ERROR,
  CLEAR_ADD_CALENDAR,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  data: null,
};

/* eslint-disable default-case, no-param-reassign */
const addCalendarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_CALENDAR:
        draft.loading = true;
        break;

      case ADD_CALENDAR_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
        break;

      case ADD_CALENDAR_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.data = null;

        break;

      case FETCH_CALENDAR:
        draft.loading = true;
        break;

      case FETCH_CALENDAR_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.data = action.payload;
        break;

      case FETCH_CALENDAR_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.data = null;

        break;

      case CLEAR_ADD_CALENDAR:
        draft.loading = false;
        draft.error = null;
        draft.data = null;

        break;
    }
  });

export default addCalendarReducer;
