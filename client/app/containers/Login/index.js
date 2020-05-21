import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Alert, Page } from 'tabler-react';
import { Helmet } from 'react-helmet';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectSaga } from 'utils/injectSaga';
import saga from '../App/saga';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import { login } from '../App/actions';
import LoginForm from '../../components/Login';
import { makeSelectError, makeSelectUser } from '../App/selectors';

const key = 'user';

export function Login({ doLogin, history }) {
  useInjectSaga({ key, saga });
  const user = useSelector(makeSelectUser());
  const error = useSelector(makeSelectError());

  useEffect(() => {
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

        {error && <Alert type="danger">{error}</Alert>}
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
