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
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';
import { Page, Grid } from 'tabler-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { loadCalendars } from './actions';
import { makeSelectCalendars } from './selectors';
import { PostOverview, Radar } from '../../components/Home';
import CalendarList from '../../components/Home/CalendarList';
const key = 'home';

export function Home({ getCalendarList }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const calendars = useSelector(makeSelectCalendars());

  useEffect(() => {
    getCalendarList();
  }, []);

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
