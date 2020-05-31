import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.calendarForm || initialState;

const makeSelectAddForm = () =>
  createSelector(
    selectHome,
    home => home.addForm,
  );

const makeSelectEditForm = () =>
  createSelector(
    selectHome,
    home => home.editForm,
  );

const makeSelectAddFormData = () =>
  createSelector(
    makeSelectAddForm(),
    form => form.data,
  );

const makeSelectEditFormData = () =>
  createSelector(
    makeSelectEditForm(),
    form => form.data,
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
  makeSelectAddFormData,
  makeSelectEditFormData,
  makeSelectError,
  makeSelectLoading,
};
