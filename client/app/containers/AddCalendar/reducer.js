import produce from 'immer';
import {
  ADD_CALENDAR_SUCCESS,
  ADD_CALENDAR_ERROR,
  ADD_CALENDAR,
  FETCH_CALENDAR,
  FETCH_CALENDAR_SUCCESS,
  FETCH_CALENDAR_ERROR,
  CLEAR_ADD_CALENDAR,
  INVITE_USER,
  INVITE_USER_SUCCESS,
  INVITE_USER_FAILURE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  addForm: {
    data: null,
  },
  editForm: {
    data: {
      users: [],
      name: '',
    },
  },
  users: {
    data: null,
  },
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
        draft.addForm = { data: action.payload };
        break;

      case ADD_CALENDAR_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.addForm = { data: null };

        break;

      case FETCH_CALENDAR:
        draft.loading = true;
        break;

      case FETCH_CALENDAR_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.editForm = { data: action.payload };
        break;

      case FETCH_CALENDAR_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.calendar = { data: null };

        break;

      case CLEAR_ADD_CALENDAR:
        draft.loading = false;
        draft.error = null;
        draft.addForm = { data: null };

        break;

      case INVITE_USER:
        draft.loading = true;
        break;

      case INVITE_USER_SUCCESS:
        draft.loading = false;
        draft.error = null;
        draft.users = { data: action.payload };
        break;

      case INVITE_USER_FAILURE:
        draft.loading = false;
        draft.error = action.err;
        draft.users = { data: action.payload };

        break;
    }
  });

export default addCalendarReducer;
