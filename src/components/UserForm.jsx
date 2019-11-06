import React from 'react'
import { Form, Field } from 'react-final-form'
import './Form.css'
import PropTypes from 'prop-types'
import CustomInput from './CustomInput'
import { required } from '../utils/validators'

const UserForm = props => {
  const { onSubmit, initialValues } = props
  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit,invalid }) => (
        <form onSubmit={handleSubmit} className="main-content__form user-form">
          <Field
            component={CustomInput}
            type="text"
            placeholder="Введите ваш запрос"
            name="userInput"
            validate={required}
          />
          <button type="submit" className="user-form__btn" disabled={invalid}>
            Искать
          </button>
        </form>
      )}
    </Form>
  )
}
UserForm.propTypes = {
  onSubmit: PropTypes.func,
  initialValues: PropTypes.object,
}
export default UserForm
