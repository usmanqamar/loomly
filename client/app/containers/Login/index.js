import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Page } from 'tabler-react';
import { Helmet } from 'react-helmet';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import { login } from './actions';
import LoginForm from '../../components/Login';
import { makeSelectData } from './selectors';

const key = 'user';

export function Login({ doLogin, history }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const user = useSelector(makeSelectData());

  useEffect(() => {
    console.log(user)
    if (user) {
      history.push('/home');
    }
  }, [user]);

  return (
    <SiteWrapper>
      <Page.Content className="pt-9">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Gallery" />
        </Helmet>

        <div className="mx-auto col-login">
          <LoginForm onSubmit={doLogin} />
        </div>
      </Page.Content>
    </SiteWrapper>
  );
}

Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    doLogin: payload => dispatch(login(payload)),
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
)(Login);
