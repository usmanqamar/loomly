import React from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'tabler-react';

const PostOverview = () => (
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

// PostOverview.propTypes = {
//   calendars: PropTypes.func.isRequired,
// };

export default PostOverview;
