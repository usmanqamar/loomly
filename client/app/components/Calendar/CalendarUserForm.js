import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Grid, Container, Header } from 'tabler-react';
import { Formik } from 'formik';

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
const CalendarUserForm = ({ onSubmit }) => (
  <Container>
    <Grid.Row className="justify-content-around align-items-center">
      <Grid.Col width={12} md={8}>
        <Header.H5>Invite Users</Header.H5>
        <Formik
          initialValues={{
            username: '',
            fullName: '',
            password: '',
          }}
          validate={values => validation(values)}
          onSubmit={values => {
            onSubmit(values);
          }}
          render={({ values, errors, touched, handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <Grid.Row>
                <Grid.Col width={12} md={3} xs={12}>
                  <Form.Group label="Name">
                    <Form.Input
                      onChange={handleChange}
                      value={values.fullName}
                      name="fullName"
                    />
                  </Form.Group>
                </Grid.Col>
                <Grid.Col width={12} sm={12} md={3}>
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
                </Grid.Col>
                <Grid.Col width={12} sm={12} md={3}>
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
                </Grid.Col>
                <Grid.Col width={12} sm={12} md={3}>
                  <Form.Group label="&nbsp;">
                    <Button type="submit" color="primary">
                      Invite
                    </Button>
                  </Form.Group>
                </Grid.Col>
              </Grid.Row>
            </Form>
          )}
        />
      </Grid.Col>
    </Grid.Row>
  </Container>
);

CalendarUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CalendarUserForm;
