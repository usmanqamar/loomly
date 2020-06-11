import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCalendar = state => state.calendar || initialState;

const makeSelectPosts = () =>
  createSelector(
    selectCalendar,
    calendar => calendar.posts,
  );

const makeSelectError = () =>
  createSelector(
    selectCalendar,
    calendar => calendar.error,
  );

const makeSelectLoading = () =>
  createSelector(
    selectCalendar,
    calendar => calendar.loading,
  );

export { selectCalendar, makeSelectPosts, makeSelectError, makeSelectLoading };
