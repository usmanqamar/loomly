import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Alert, Page } from 'tabler-react';
import { Helmet } from 'react-helmet';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';

import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import ForgotForm from '../../components/Forgot';
import { makeSelectError, makeSelectLoading } from './selectors';
import { submitForgot } from './actions';
import LoadingIndicator from '../../components/LoadingIndicator';
import { useInjectReducer } from '../../utils/injectReducer';

const key = 'forgot';

export function Forgot({ doSubmit, history }) {
  useInjectSaga({ key, saga });
  useInjectReducer({ key, reducer });
  const error = useSelector(makeSelectError());
  const loading = useSelector(makeSelectLoading());

  useEffect(() => {}, []);

  return (
    <SiteWrapper>
      <Page.Content className="pt-9">
        <Helmet>
          <title>Forgot</title>
          <meta name="description" content="Gallery" />
        </Helmet>
        {loading && <LoadingIndicator />}

        {error && (
          <Alert type="danger">We didnt find this user in our system</Alert>
        )}

        {error !== null && (
          <Alert type="success">
            Request submitted. Please check your inbox
          </Alert>
        )}

        <div className="mx-auto col-login">
          <ForgotForm onSubmit={doSubmit} />
        </div>
      </Page.Content>
    </SiteWrapper>
  );
}

Forgot.propTypes = {
  doSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    doSubmit: payload => dispatch(submitForgot(payload)),
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
)(Forgot);
