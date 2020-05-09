import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FETCH_IMAGES } from './constants';
import { API_BASE } from '../../utils/constants';
import { imagesLoaded, imagesLoadingError } from './actions';

export function* getImages({ payload }) {
  const { section, sort, window, isViral } = payload;

  const requestURL = `${API_BASE}/gallery/${section}/${sort}/${window}/1?showViral=${isViral}`;

  try {
    const images = yield call(request, requestURL);
    yield put(imagesLoaded(images));
  } catch (err) {
    yield put(imagesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  yield takeLatest(FETCH_IMAGES, getImages);
}
