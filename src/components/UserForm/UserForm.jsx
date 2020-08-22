import React, { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import styles from './UserForm.module.css';
import PropTypes from 'prop-types';
import CustomInput from '../CustomInput/CustomInput';
import {
  required,
  checkField,
  composeValidators,
} from '../../utils/validators';

const UserForm = ({ history, location }) => {
  const currentRep = location.search.slice(12);

  const getInitialValues = () => {
    return {
      userInput: currentRep,
    };
  };
  const handleSubmit = useCallback(
    values => {
      history.push(
        `/seacrh&page=1?repository=${values.userInput.toLowerCase()}`
      );
    },
    [history]
  );
  return (
    <>
      <p className="greeting">
        Введите имя пользователя и название репозитория для поиска (Формат
        запроса: Owner/RepoName)
      </p>
      <Form onSubmit={handleSubmit} initialValues={getInitialValues()}>
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
    </>
  );
};
UserForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
};
export default UserForm;
