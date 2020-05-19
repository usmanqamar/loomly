import React from 'react';
import PropTypes from 'prop-types';
import {Card, Form, Button, Grid, Container} from 'tabler-react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import {SocialIcon} from "react-social-icons";

const FaceBook = ({ fbPages, handleFBLogin }) => (
  <Container>
    <Grid.Row className="justify-content-around align-items-center">
      <Grid.Col>
        <SocialIcon network="facebook" />
      </Grid.Col>

      {fbPages.length > 0 && (
        <Grid.Col>
          <Form.Group>
            <Form.Select onChange={() => alert('')}>
              <option value="">Select</option>
              {fbPages.map(page => (
                <option value={page}>{page.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Grid.Col>
      )}

      <Grid.Col className="text-right">
        <Button color="primary" onClick={handleFBLogin}>
          Connect
        </Button>
      </Grid.Col>
    </Grid.Row>
  </Container>
);

FaceBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FaceBook;
