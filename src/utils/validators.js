export const required = value => (value ? undefined : 'Required');
export const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export const checkField = value => {
  const regExp = /^[?!,.а-яА-ЯёЁ0-9]+$/;
  return String(value).search(regExp) !== -1
    ? 'Знаки препинания и кириллица запрещены!'
    : undefined;
};
