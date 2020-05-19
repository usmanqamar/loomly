import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Form,
  Button,
  Tabs,
  Tab,
  Alert,
  Container,
  Grid,
  Page,
} from 'tabler-react';

import FaceBook from './fbConnect';
import NewCalendar from './NewCalendar';

const EditCalendar = ({ onSubmit, fbPages, handleFBLogin }) => (
  <div className="mx-auto">
    <Card>
      <Card.Body>
        <Tabs initialTab="Accounts">
          <Tab title="General Information">
            <NewCalendar onSubmit={onSubmit} />
          </Tab>
          <Tab title="Accounts">
            <Alert type="secondary">
              <FaceBook handleFBLogin={handleFBLogin} fbPages={fbPages} />
            </Alert>
            <Alert type="secondary">
              <FaceBook handleFBLogin={handleFBLogin} fbPages={fbPages} />
            </Alert>
          </Tab>
          <Tab title="Users">
            <Alert type="secondary">
              <FaceBook handleFBLogin={handleFBLogin} fbPages={fbPages} />
            </Alert>
            <Alert type="secondary">
              <FaceBook handleFBLogin={handleFBLogin} fbPages={fbPages} />
            </Alert>
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  </div>
);

EditCalendar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default EditCalendar;
