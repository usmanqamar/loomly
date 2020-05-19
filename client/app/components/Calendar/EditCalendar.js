import React from 'react';
import PropTypes from 'prop-types';
import { Card, Tabs, Tab, Alert } from 'tabler-react';

import SocialAccount from './AccountConnect';
import CalendarForm from './CalendarForm';

const EditCalendar = ({ onSubmit, accounts, handleLogin }) => (
  <div className="mx-auto">
    <Card>
      <Card.Body>
        <Tabs initialTab="Accounts">
          <Tab title="General Information">
            <CalendarForm onSubmit={onSubmit} />
          </Tab>
          <Tab title="Accounts">
            <Alert type="secondary">
              <SocialAccount
                handleLogin={() => handleLogin('FB')}
                pages={accounts.FB}
                type="facebook"
              />
            </Alert>
            <Alert type="secondary">
              <SocialAccount
                handleLogin={() => handleLogin('Insta')}
                pages={accounts.Insta}
                type="instagram"
              />
            </Alert>
          </Tab>
          <Tab title="Users">Users</Tab>
        </Tabs>
      </Card.Body>
    </Card>
  </div>
);

EditCalendar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  accounts: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default EditCalendar;
