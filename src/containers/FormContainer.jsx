import { connect } from 'react-redux';
import UserForm from '../components/UserForm';
import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = props => {
  const handleSubmit = values => {
    props.history.push(`/seacrh&page=1?repository=${values.userInput}`);
  };
  const getInitialValues = () => {
    return {
      userInput: props.currentRep,
    };
  };
  return (
    <>
      <h1 className="greeting">Приветствую Вас! Заполните поле ввода</h1>
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
