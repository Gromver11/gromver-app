export const required = value => (value ? undefined : 'Required');
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const checkField = value => {
  const regExp = /^[/a-zA-z0-9]+$/;
  return regExp.test(value)
    ? undefined
    : "Разрешены только цифры, латинские буквы и символ '/'";
};
