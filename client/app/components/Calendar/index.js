import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'tabler-react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

const validation = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = 'Invalid email';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};
const LoginForm = ({ onSubmit }) => (
  <Formik
    initialValues={{
      username: '',
      password: '',
    }}
    validate={values => validation(values)}
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
            <Form.Group className="text-center">
              <Link to="/forgot">Forgot Password</Link>
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
