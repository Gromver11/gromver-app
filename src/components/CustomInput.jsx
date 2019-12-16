import React from 'react';
import styles from './CustomInput.module.css';

const CustomIntput = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
}) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        {...input}
        placeholder={placeholder}
        type={type}
      />
      {touched && (error && <span className={styles.error}>{error}!</span>)}
    </div>
  );
};

export default CustomIntput;
