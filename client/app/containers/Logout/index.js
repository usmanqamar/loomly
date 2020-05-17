import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Page } from 'tabler-react';
import { Helmet } from 'react-helmet';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from '../App/reducer';
import saga from './saga';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import LoginForm from '../../components/Login';
import { logout } from '../App/actions';
import { makeSelectUser } from '../App/selectors';

const key = 'user';

export function Logout({ doLogout, history }) {
  useInjectSaga({ key, saga });

  const user = useSelector(makeSelectUser());

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
    doLogout();
  }, [user]);

  return (
    <SiteWrapper>
      <Page.Content className="pt-9">
        <Helmet>
          <title>Login</title>
          <meta name="description" content="Gallery" />
        </Helmet>

        <div className="mx-auto col-login">
          <LoginForm onSubmit={doLogout} />
        </div>
      </Page.Content>
    </SiteWrapper>
  );
}

Logout.propTypes = {
  doLogout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    doLogout: payload => dispatch(logout(payload)),
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
)(Logout);
