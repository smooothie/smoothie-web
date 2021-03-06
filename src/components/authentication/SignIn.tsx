import React, { useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import Cookies from 'js-cookie';

import urls from 'helpers/urls';
import getSubmitHandler from 'helpers/getSubmitHandler';
import { AUTH_TOKEN_COOKIE } from 'helpers/constants';
import { ResponseData } from './types';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Невірний email')
    .required("Обов'язкове поле"),
  password: Yup.string().required("Обов'язкове поле"),
});

const handleSubmit = getSubmitHandler('token/');

const SignIn: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const onSuccess = useCallback(
    (responseData: ResponseData) => {
      Cookies.set(AUTH_TOKEN_COOKIE, responseData.access);
      history.replace(urls.home);
    },
    [history]
  );

  return (
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Вхід
      </Typography>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, helpers) => {
          Cookies.remove(AUTH_TOKEN_COOKIE);
          handleSubmit(values, helpers, onSuccess);
        }}
        validationSchema={SignInSchema}
      >
        {({ isSubmitting, status }) => (
          <Form className={classes.form}>
            <Field
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              component={TextField}
            />
            <Field
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              component={TextField}
            />
            {status !== null && <Typography color="error">{status}</Typography>}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={isSubmitting}
            >
              Увійти
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
