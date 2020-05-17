import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button, Icon, Alert } from 'tabler-react';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';

const PostOverview = ({ calendars }) => (
  <Card>
    <Card.Header>
      <Card.Title>
        <Icon name="copy" className="mr-2 h3" />
        Post Overview
      </Card.Title>
    </Card.Header>
    <Card.Body />
  </Card>
);

PostOverview.propTypes = {
  calendars: PropTypes.func.isRequired,
};

export default PostOverview;
