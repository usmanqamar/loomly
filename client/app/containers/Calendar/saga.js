import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_POSTS } from './constants';
import { API_BASE, GET_POSTS_API } from '../../utils/constants';
import { postsLoaded, postsLoadingError } from './actions';

export function* getPosts({ payload }) {
  const requestURL = `${API_BASE}${GET_POSTS_API}`;

  console.log(payload);
  const fake = {
    data: [
      {
        id: 0,
        title: 'Title of post',
        allDay: true,
        start: new Date(),
        end: new Date(),
      },
    ],
  };

  try {
    const images = yield call(request, requestURL, fake);
    yield put(postsLoaded(images));
  } catch (err) {
    yield put(postsLoadingError(err));
  }
}

export default function* calendarData() {
  yield takeLatest(FETCH_POSTS, getPosts);
}
