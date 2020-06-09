import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table, Button } from 'tabler-react';

const CalendarUser = ({ users }) => (
  <Container>
    <Table>
      <Table.Header>
        <Table.ColHeader>
          <strong>Name</strong>
        </Table.ColHeader>
        <Table.ColHeader>
          <strong>Email</strong>
        </Table.ColHeader>
        <Table.ColHeader />
      </Table.Header>
      <Table.Body>
        {users.map(user => (
          <Table.Row>
            <Table.Col>{user.fullName}</Table.Col>
            <Table.Col>{user.username}</Table.Col>

            <Table.Col alignContent="right">
              <Button color="primary">Revoke</Button>
            </Table.Col>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Container>
);

CalendarUser.propTypes = {
  users: PropTypes.array.isRequired,
};

export default CalendarUser;
