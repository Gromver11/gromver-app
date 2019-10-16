import React from 'react'

const CustomIntput = ({
  input,
  placeholder,
  type,
  meta: { touched, error},
}) => {
  return (
    <div className="wrapper user-form__wrapper">
      <input className="user-form__input" {...input} placeholder={placeholder} type={type} />
      {touched &&
        ((error && <span className="user-form__error">{error}!</span>) )}
    </div>
  )
}

export default CustomIntput
