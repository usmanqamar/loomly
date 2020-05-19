import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.addCalendar || initialState;

const makeSelectData = () =>
  createSelector(
    selectHome,
    home => home.data,
  );

const makeSelectError = () =>
  createSelector(
    selectHome,
    home => home.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectHome,
    home => home.loading,
  );

export { selectHome, makeSelectData, makeSelectError, makeSelectLoading };
