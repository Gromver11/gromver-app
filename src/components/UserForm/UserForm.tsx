import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styles from './UserForm.module.css';
import type { History, Location } from 'history';

type UserFormProps = {
  location: Location;
  history: History;
};

export const UserForm: React.FC<UserFormProps> = ({ history, location }) => {
  const currentRep = location.search.slice(12);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userInput: currentRep,
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    setValue('userInput', currentRep);
  }, [currentRep]);

  const onSubmit = (values: { userInput: string }) => {
    history.push(`/seacrh&page=1?repository=${values.userInput.toLowerCase()}`);
  };
  return (
    <>
      <p className="greeting">
        Введите имя пользователя и название репозитория для поиска (Формат
        запроса: Owner/RepoName)
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.userForm}>
        <div className={styles.wrapper}>
          <input
            className={styles.input}
            {...register('userInput', {
              required: 'Обязательное поле',
              pattern: {
                value: /^[/a-zA-z0-9]+$/,
                message: "Разрешены только цифры, латинские буквы и символ '/'",
              },
            })}
          />
          {!!errors.userInput && (
            <div className={styles.error}>{errors.userInput.message}</div>
          )}
        </div>
        <button
          type="submit"
          className={`${styles.btn} btn`}
          disabled={!!errors.userInput}
        >
          Искать
        </button>
      </form>
    </>
  );
};
