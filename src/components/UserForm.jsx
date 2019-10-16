import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './Form.css'
import PropTypes from 'prop-types'
import CustomInput from './CustomInput'
import { required, maxLength20 } from '../utils/validators'

const UserForm = props => {
  const { handleSubmit, invalid } = props
  return (
    <form onSubmit={handleSubmit} className="main-content__form user-form">
      <Field
        component={CustomInput}
        type="text"
        placeholder="Введите ваш запрос"
        name="userInput"
        validate={[required, maxLength20]}
      />
      <button type="submit" disabled={invalid} className="user-form__btn">
        Искать
      </button>
    </form>
  )
}
UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}
export default reduxForm({
  form: 'userForm',
})(UserForm)
