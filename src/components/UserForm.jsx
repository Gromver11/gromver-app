import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './Form.css'

const UserForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit} className="user-form">
      <Field
        component="input"
        type="text"
        placeholder="Введите ваш запрос"
        name="userInput"
      />
      <button className="user-form__btn">Искать</button>
    </form>
  )
}
export default reduxForm({
  form: 'userForm',
})(UserForm)
