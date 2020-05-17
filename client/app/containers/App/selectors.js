import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    global => global.user,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    global => global.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    global => global.loading,
  );

export { selectGlobal, makeSelectUser, makeSelectError, makeSelectLoading };
