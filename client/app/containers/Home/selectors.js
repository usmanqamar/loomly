import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;
// I am not sure about API but it return mix of albums and non album items so for simplicity i am
// only getting which are only images, not album as ui is not supporting albums
const makeSelectImages = () =>
  createSelector(
    selectHome,
    homeState => homeState.images.filter(image => !image.is_album),
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    homeState => homeState.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.loading,
  );

export { selectHome, makeSelectImages, makeSelectError, makeSelectLoading };
