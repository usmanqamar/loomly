import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectData = () =>
  createSelector(
    selectHome,
    home => home.data,
  );

const makeSelectCalendars = () =>
  createSelector(
    makeSelectData(),
    data => data.calendars,
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

export {
  selectHome,
  makeSelectData,
  makeSelectError,
  makeSelectLoading,
  makeSelectCalendars,
};
