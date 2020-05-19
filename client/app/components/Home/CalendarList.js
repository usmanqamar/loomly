import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Icon, Alert } from 'tabler-react';
import { Link, NavLink } from 'react-router-dom';

const CalendarList = ({ calendars }) => (
  <Card>
    <Card.Header>
      <Card.Title>
        <Icon className="mr-2 h3" name="calendar" />
        Calendars
      </Card.Title>
    </Card.Header>
    <Card.Body>
      <Card.Title>
        <Button
          to="/calendar/add"
          RootComponent={Link}
          pill
          color="secondary blue"
          icon="plus"
        >
          Add new calendar
        </Button>
      </Card.Title>
      {calendars.map(cal => (
        <Alert type="secondary">
          <NavLink to="/calendar">{cal.name}</NavLink>
        </Alert>
      ))}
    </Card.Body>
  </Card>
);

CalendarList.propTypes = {
  calendars: PropTypes.func.isRequired,
};

export default CalendarList;
