import produce from 'immer';
import {
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR,
  FETCH_IMAGES,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: null,
  images: [],
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_IMAGES:
        draft.loading = true;
        break;

      case FETCH_IMAGES_SUCCESS:
        draft.loading = false;
        draft.images = action.payload.data;
        draft.error = null;
        break;

      case FETCH_IMAGES_ERROR:
        draft.loading = false;
        draft.error = action.err;
        draft.images = [];
        break;
    }
  });

export default homeReducer;
