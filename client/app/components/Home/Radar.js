import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button, Icon, Alert } from 'tabler-react';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';

const Radar = ({ calendars }) => (
  <Card>
    <Card.Header>
      <Card.Title>
        <Icon name="eye" className="mr-2 h3" />
        On the Radar
      </Card.Title>
    </Card.Header>
    <Card.Body />
  </Card>
);

Radar.propTypes = {
  calendars: PropTypes.func.isRequired,
};

export default Radar;
