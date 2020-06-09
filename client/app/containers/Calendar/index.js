import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
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
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "./actions";
const key = 'home';

export function CalendarContainer() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  //useSelector()
  //useDispatch()

  useEffect(() => {

    loadPosts()
  }, []);

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

  const onSelectEvent = event => {
    alert(event.title);
  };

  return (
    <SiteWrapper>
      <Page.Content>
        <Helmet>
          <title>Calendar</title>
          <meta name="description" />
        </Helmet>
        <div className="calendar">
          <Calendar
            events={events}
            localizer={localizer}
            onSelectEvent={onSelectEvent}
            components={{
              timeSlotWrapper: ColoredDateCellWrapper,
            }}
            views={{ month: true, week: true }}
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

export default compose(memo)(CalendarContainer);
