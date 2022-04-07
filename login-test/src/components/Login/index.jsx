import React, { useEffect, useReducer } from 'react';

import Card from '../UI/Card';
import classes from './Login.module.css';
import Button from '../UI/Button';

import { loginReducer, initialFormState } from './loginReducer';
import { useAuthContext } from '../../store/AuthContext';

const Login = () => {
  const { loginHandler } = useAuthContext();

  const [form, dispatchForm] = useReducer(loginReducer, initialFormState);

  const {
    email: { isValid: isEmailValid },
    pass: { isValid: isPassValid },
  } = form;

  useEffect(() => {
    const formValidationTimeout = setTimeout(
      () => dispatchForm({ type: 'FORM_VALIDATION' }),
      100,
    );

    return () => clearTimeout(formValidationTimeout);
  }, [isEmailValid, isPassValid]);

  const emailChangeHandler = ({ target: { value } }) => {
    dispatchForm({ type: 'EMAIL_INPUT', value: value });
  };

  const passwordChangeHandler = ({ target: { value } }) => {
    dispatchForm({ type: 'PASSWORD_INPUT', value: value });
  };

  const validateEmailHandler = () => {
    dispatchForm({ type: 'EMAIL_VALIDATION' });
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: 'PASSWORD_VALIDATION' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    loginHandler(form.email.value, form.pass.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            form.email.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={form.email.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            form.pass.isValid === false ? classes.invalid : ''
          }`}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={form.pass.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type='submit'
            className={classes.btn}
            disabled={!form.isValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
