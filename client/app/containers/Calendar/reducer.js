import produce from 'immer';
import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  posts: [],
};

/* eslint-disable default-case, no-param-reassign */
const calendarReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_POSTS:
        draft.loading = true;
        break;

      case FETCH_POSTS_SUCCESS:
        draft.loading = false;
        draft.posts = action.payload.data;
        draft.error = null;
        break;

      case FETCH_POSTS_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.posts = [];
        break;
    }
  });

export default calendarReducer;
