import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import styles from './UserForm.module.css';
import type { History, Location } from 'history';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

type UserFormProps = {
  location: Location;
  history: History;
};

export const UserForm: React.FC<UserFormProps> = ({ history, location }) => {
  const currentRep = location.search.slice(12);

  const {
    handleSubmit,
    setValue,
    control,
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
    if (errors.userInput) return;
    return history.push(
      `/seacrh&page=1?repository=${values.userInput.toLowerCase()}`,
    );
  };
  return (
    <>
      <Alert className="greeting" variant="outlined" severity="info">
        Введите имя пользователя и название репозитория для поиска (Формат
        запроса: Owner/RepoName)
      </Alert>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.userForm}>
        <Stack direction="row">
          <div className={styles.input}>
            <Controller
              name="userInput"
              rules={{
                required: 'Обязательное поле',
                pattern: {
                  value: /^[/a-zA-z0-9]+$/,
                  message:
                    "Разрешены только цифры, латинские буквы и символ '/'",
                },
              }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  placeholder="reduxjs/redux"
                  error={!!errors.userInput}
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  size="small"
                />
              )}
            />
            {!!errors.userInput && (
              <div className={styles.error}>
                <Alert severity="error">{errors.userInput.message}</Alert>
              </div>
            )}
          </div>
          <Button
            endIcon={<SearchIcon />}
            variant="contained"
            type="submit"
            size="small"
            color={errors.userInput ? 'error' : 'success'}
          >
            Искать
          </Button>
        </Stack>
      </form>
    </>
  );
};
