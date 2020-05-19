import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Page } from 'tabler-react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import reducer from './reducer';
import saga from './saga';
import 'react-toggle/style.css';
import SiteWrapper from '../Wrapper/SiteWrapper';

import 'react-big-calendar/lib/css/react-big-calendar.css';
const key = 'home';

export function CalendarContainer() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {}, []);

  const localizer = momentLocalizer(moment); // or globalizeLocalizer

  const events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(),
      end: new Date(),
    },
  ];

  const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: 'lightblue',
      },
    });

  return (
    <SiteWrapper>
      <Page.Content>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="Gallery" />
        </Helmet>
        <div className="calendar">
          <Calendar
            events={events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            onSelectEvent={event => alert(event.title)}
            components={{
              timeSlotWrapper: ColoredDateCellWrapper,
            }}
          />
        </div>
      </Page.Content>
    </SiteWrapper>
  );
}

Calendar.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps() {
  return {};
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withRouter,
  memo,
)(CalendarContainer);
