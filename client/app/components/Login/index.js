import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'tabler-react';
import { Formik } from 'formik';

const LoginForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      const errors = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    }}
    onSubmit={values => {
      onSubmit(values);
    }}
    render={({ values, errors, touched, handleChange, handleSubmit }) => (
      <Card>
        <Card.Body>
          <Card.Title>Login to your account</Card.Title>
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
            <Form.Group label="Password">
              <Form.Input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                className={
                  errors.password && touched.password ? 'is-invalid' : ''
                }
              />

              {errors.password && touched.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </Form.Group>
            <Form.Group>
              <Button type="submit" block color="primary">
                Login
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    )}
  />
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
