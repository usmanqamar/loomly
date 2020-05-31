import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid, Container } from 'tabler-react';

import { SocialIcon } from 'react-social-icons';

const Account = ({
  isConnected,
  type,
  pages,
  handleLogin,
  onSelect,
  onSaveConnection,
}) => (
  <Container>
    <Grid.Row className="justify-content-around align-items-center">
      <Grid.Col>
        <SocialIcon network={type} />
      </Grid.Col>

      {pages.length > 0 ? (
        <Grid.Col>
          <Grid.Row className="justify-content-end">
            <Grid.Col sm={9}>
              <Form.Select onChange={onSelect}>
                <option value="">Select</option>
                {pages.map(page => (
                  <option value={page.id}>{page.name}</option>
                ))}
              </Form.Select>
            </Grid.Col>
            <Grid.Col sm={3} className="text-right">
              <Button
                block
                pill
                color="primary"
                onClick={onSaveConnection}
              >
                Save
              </Button>
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      ) : (
        <Grid.Col className="text-right">
          {!isConnected ? (
            <Button pill color="primary" onClick={handleLogin}>
              Connect
            </Button>
          ) : (
            <Button pill color="danger" onClick={handleLogin}>
              Remove
            </Button>
          )}
        </Grid.Col>
      )}
    </Grid.Row>
  </Container>
);
Account.defaultProps = {
  pages: [],
};
Account.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  pages: PropTypes.array,
  type: PropTypes.string.isRequired,
  isConnected: PropTypes.bool.isRequired,
  onSaveConnection: PropTypes.func.isRequired,
};

export default Account;
