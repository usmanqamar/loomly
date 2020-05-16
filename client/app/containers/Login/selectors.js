import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.user || initialState;
// I am not sure about API but it return mix of albums and non album items so for simplicity i am
// only getting which are only images, not album as ui is not supporting albums
const makeSelectData = () =>
  createSelector(
    selectUser,
    user => user.data,
  );

const makeSelectError = () =>
  createSelector(
    selectUser,
    user => user.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectUser,
    user => user.loading,
  );

export { selectUser, makeSelectData, makeSelectError, makeSelectLoading };
