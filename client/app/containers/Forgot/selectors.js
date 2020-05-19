import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForgot = state => state.forgot || initialState;

const makeSelectError = () =>
  createSelector(
    selectForgot,
    forgot => forgot.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectForgot,
    forgot => forgot.loading,
  );

export { selectForgot, makeSelectError, makeSelectLoading };
