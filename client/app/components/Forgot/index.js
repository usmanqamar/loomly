import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'tabler-react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const ForgotForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      return errors;
    }}
    onSubmit={values => {
      onSubmit(values);
    }}
    render={({ values, errors, touched, handleChange, handleSubmit }) => (
      <Card>
        <Card.Body>
          <Card.Title>Forgot your password ?</Card.Title>
          <p className="text-muted">
            Enter your email address and your password will be reset and emailed
            to you.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group label="Username">
              <Form.Input
                onChange={handleChange}
                value={values.username}
                name="username"
                className={
                  errors.username && touched.username ? 'is-invalid' : ''
                }
              />
              {errors.username && touched.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </Form.Group>
            <Form.Group>
              <Button block color="primary">
                Submit
              </Button>
            </Form.Group>

            <Form.Group>
              <Form.Group className="text-center">
                <Link to="/">Back to login</Link>
              </Form.Group>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    )}
  />
);

ForgotForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ForgotForm;
