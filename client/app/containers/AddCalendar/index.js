import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import { Icon, Page, Grid, Card, Form, Button } from 'tabler-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { loadCalendars } from './actions';
import { Formik } from 'formik';
const key = 'calendar-config';

export function Home() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {}, []);

  return (
    <SiteWrapper>
      <Page.Content>
        <Helmet>
          <title>Add New Calendar</title>
        </Helmet>

        <div className="mx-auto">
          <Formik
            initialValues={{
              name: '',
              password: '',
            }}
            validate={values => {
              // same as above, but feel free to move this into a class method now.
              const errors = {};
              if (!values.name) {
                errors.name = 'Required';
              }
              return errors;
            }}
            onSubmit={values => {
              // onSubmit(values);
            }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
            }) => (
              <Card>
                <Form className="col-login" onSubmit={handleSubmit}>
                  <Card.Body>
                    <Card.Title>Set Calendar Details</Card.Title>

                    <Form.Group label="Calendar Name">
                      <Form.Input
                        onChange={handleChange}
                        value={values.name}
                        name="name"
                        className={
                          errors.name && touched.name ? 'is-invalid' : ''
                        }
                      />
                      {errors.name && touched.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </Form.Group>
                    <Form.Group />

                    <Button type="submit" color="primary">
                      Save and Continue
                    </Button>
                  </Card.Body>
                </Form>
              </Card>
            )}
          />
        </div>
      </Page.Content>
    </SiteWrapper>
  );
}

Home.propTypes = {
  getCalendarList: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    getCalendarList: () => dispatch(loadCalendars()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
  memo,
)(Home);
