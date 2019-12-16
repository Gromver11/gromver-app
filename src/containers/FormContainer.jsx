import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = props => {
  const handleSubmit = values => {
    props.history.push(
      `/seacrh&page=1?repository=${values.userInput.toLowerCase()}`
    );
  };
  const getInitialValues = () => {
    return {
      userInput: props.currentRep,
    };
  };
  return (
    <>
      <p className="greeting">
        Введите имя пользователя и название репозитория для поиска (Формат
        запроса: Owner/RepoName)
      </p>
      <UserForm onSubmit={handleSubmit} initialValues={getInitialValues()} />
    </>
  );
};

const mapStateToProps = (state, OwnProps) => {
  const currentRep = OwnProps.location.search.slice(12);
  return {
    currentRep,
  };
};
FormContainer.propTypes = {
  currentRep: PropTypes.string.isRequired,
};
export default connect(mapStateToProps)(FormContainer);
