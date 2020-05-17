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
import {Icon, Page, Grid, Card } from 'tabler-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { loadCalendars } from './actions';
import { makeSelectCalendars } from './selectors';
import {CalendarList, PostOverview, Radar} from '../../components/Home';
const key = 'home';

export function Home({ getCalendarList }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const calendars = useSelector(makeSelectCalendars());

  useEffect(() => {
    getCalendarList();
  }, []);

  // useEffect(() => {
  //   window.fbAsyncInit = function() {
  //     FB.init({
  //       appId: '2993796674014018',
  //       cookie: true,
  //       xfbml: true,
  //       version: 'v2.5',
  //     });
  //   };
  //
  //   console.log('Loading fb api');
  //   // Load the SDK asynchronously
  //   (function(d, s, id) {
  //     let js;
  //     const fjs = d.getElementsByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = '//connect.facebook.net/en_US/sdk.js';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, 'script', 'facebook-jssdk');
  // }, []);
  //
  // const testAPI = () => {
  //   console.log('Welcome!  Fetching your information.... ');
  //   FB.api('/me', function(response) {
  //     console.log(`Successful login for: ${response.name}`, response);
  //     FB.api('/113009247076006/accounts', function(response) {
  //       console.log('----', response);
  //     });
  //   });
  // };
  // const statusChangeCallback = response => {
  //   console.log('statusChangeCallback');
  //   console.log(response);
  //   if (response.status === 'connected') {
  //     testAPI();
  //   } else if (response.status === 'not_authorized') {
  //     console.log('Please log into this app.');
  //   } else {
  //     console.log('Please log into this facebook.');
  //     FB.login(statusChangeCallback, {
  //       scope: 'pages_read_engagement,pages_manage_posts',
  //     });
  //   }
  // };
  // const checkLoginState = () => {
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // };
  // const handleFBLogin = () => {
  //   // FB.login(checkLoginState());
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // };

  return (
    <SiteWrapper>
      <Page.Content>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Gallery" />
        </Helmet>
        <Grid.Row>
          <Grid.Col lg={4}>
            <CalendarList calendars={calendars} />
          </Grid.Col>

          <Grid.Col lg={4}>
            <PostOverview />
          </Grid.Col>

          <Grid.Col lg={4}>
            <Radar />
          </Grid.Col>
        </Grid.Row>
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
