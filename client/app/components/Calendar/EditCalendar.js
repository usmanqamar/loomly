import React from 'react';
import PropTypes from 'prop-types';
import { Card, Tabs, Tab, Alert } from 'tabler-react';

import SocialAccount from './AccountConnect';
import CalendarForm from './CalendarForm';
import CalendarUserForm from './CalendarUserForm';
import CalendarUser from './CalendarUsers';

const EditCalendar = ({
  onSubmit,
  accounts,
  handleLogin,
  onSelect,
  onSaveConnection,
  onSaveUser,
  calendarData,
}) => (
  <div className="mx-auto">
    <Card>
      <Card.Body>
        <Tabs initialTab="Accounts">
          <Tab title="General Information">
            <CalendarForm onSubmit={onSubmit} name={calendarData.name} />
          </Tab>
          <Tab title="Accounts">
            <Alert type="secondary">
              <SocialAccount
                handleLogin={() => handleLogin('FB')}
                pages={accounts.FB}
                onSelect={onSelect}
                onSaveConnection={() => onSaveConnection('FB')}
                type="facebook"
              />
            </Alert>
            <Alert type="secondary">
              <SocialAccount
                handleLogin={() => handleLogin('Insta')}
                onSelect={onSelect}
                onSaveConnection={() => onSaveConnection('Insta')}
                pages={accounts.Insta}
                type="instagram"
              />
            </Alert>
          </Tab>
          <Tab title="Users">
            <CalendarUser users={calendarData.users} />
            <CalendarUserForm onSubmit={onSaveUser} />
          </Tab>
        </Tabs>
      </Card.Body>
    </Card>
  </div>
);

EditCalendar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  accounts: PropTypes.object.isRequired,
  handleLogin: PropTypes.func.isRequired,
  onSaveConnection: PropTypes.func.isRequired,
  onSaveUser: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  calendarData: PropTypes.object.isRequired,
};

export default EditCalendar;
