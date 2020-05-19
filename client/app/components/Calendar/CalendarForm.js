import React from 'react';
import PropTypes from 'prop-types';
import { Card, Form, Button } from 'tabler-react';
import { Formik } from 'formik';

const CalendarForm = ({ name, isEdit, onSubmit }) => (
  <Formik
    initialValues={{
      name,
    }}
    validate={values => {
      // same as above, but feel free to move this into a class method now.
      const errors = {};
      if (!values.name) {
        errors.name = 'Required';
      }
      return errors;
    }}
    onSubmit={values => {
      onSubmit(values);
    }}
    render={({ values, errors, touched, handleChange, handleSubmit }) => (
      <Form className="col-login" onSubmit={handleSubmit}>
        <Card.Body>
          <Card.Title>Set Calendar Details</Card.Title>

          <Form.Group label="Calendar Name">
            <Form.Input
              onChange={handleChange}
              value={values.name}
              name="name"
              className={errors.name && touched.name ? 'is-invalid' : ''}
            />
            {errors.name && touched.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </Form.Group>
          <Form.Group />

          <Button type="submit" color="primary">
            {isEdit ? 'Save and Continue' : 'Save'}
          </Button>
        </Card.Body>
      </Form>
    )}
  />
);

CalendarForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CalendarForm;
