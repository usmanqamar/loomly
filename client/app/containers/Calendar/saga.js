import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_POSTS} from './constants';
import {API_BASE, GET_CALENDAR_POSTS} from '../../utils/constants';
import { postsLoaded, postsLoadingError } from './actions';

export function* getPosts({ payload }) {

  const requestURL = `${API_BASE}${GET_CALENDAR_POSTS}`;

  try {
    const images = yield call(request, requestURL);
    yield put(postsLoaded(images));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}


export default function* calendarData() {
  yield takeLatest(FETCH_POSTS, getPosts);
}
