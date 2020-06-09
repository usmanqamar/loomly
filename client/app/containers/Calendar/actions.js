import {
  FETCH_POSTS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_SUCCESS,
} from './constants';

export function loadPosts(payload) {
  return {
    type: FETCH_POSTS,
    payload,
  };
}

export function postsLoaded(payload) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload,
  };
}

export function postsLoadingError(err) {
  return {
    type: FETCH_POSTS_ERROR,
    err,
  };
}
