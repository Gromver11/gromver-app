import React from 'react';
import { Form, Field } from 'react-final-form';
import styles from './Form.module.css';
import PropTypes from 'prop-types';
import CustomInput from './CustomInput';
import { required, checkField, composeValidators } from '../utils/validators';

const UserForm = props => {
  const { onSubmit, initialValues } = props;
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, invalid }) => (
        <form onSubmit={handleSubmit} className={styles.userForm}>
          <Field
            component={CustomInput}
            type="text"
            placeholder="Введите ваш запрос"
            name="userInput"
            validate={composeValidators(required, checkField)}
          />
          <button
            type="submit"
            className={`${styles.btn} btn`}
            disabled={invalid}
          >
            Искать
          </button>
        </form>
      )}
    </Form>
  );
};
UserForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};
export default UserForm;
