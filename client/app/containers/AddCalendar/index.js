import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect, useSelector } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { SocialIcon } from 'react-social-icons';
import reducer from './reducer';
import saga from './saga';
import LoadingIndicator from '../../components/LoadingIndicator';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import {
  Page,
  Grid,
  Tabs,
  Tab,
  Card,
  Button,
  Alert,
  Container,
  Form,
} from 'tabler-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { loadCalendars } from './actions';
import { Formik } from 'formik';
import { FB_APP_ID } from '../../utils/constants';
import NewCalendar from '../../components/Calendar/NewCalendar';
import EditCalendar from '../../components/Calendar/EditCalendar';
const key = 'calendar-config';

/* global FB */

export function Home(history) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [fbPages, setFbpages] = useState([]);
  useEffect(() => {}, [history.location.hash]);

  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId: FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v2.5',
      });
    };

    (function(d, s, id) {
      let js;
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }, []);

  const getAccounts = () => {
    FB.api('/me', function(response) {
      FB.api(`/${response.id}/accounts`, function(res) {
        setFbpages(res.data);
      });
    });
  };
  const statusChangeCallback = response => {
    if (response.status === 'connected') {
      getAccounts();
    } else if (response.status === 'not_authorized') {
      console.log('not authorized');
    } else {
      FB.login(statusChangeCallback, {
        scope: 'pages_manage_posts,publish_to_groups,instagram_basic',
      });
    }
  };

  const handleFBLogin = () => {
    FB.getLoginStatus(statusChangeCallback);
  };

  const onSubmit = () => {
    alert('');
  };

  return (
    <SiteWrapper>
      <Page.Content>
        <Helmet>
          <title>Add New Calendar</title>
        </Helmet>

        <Card>
          <NewCalendar onSubmit={onSubmit} />
        </Card>
        <EditCalendar fbPages={fbPages} handleFBLogin={handleFBLogin} />
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
