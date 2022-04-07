import React, { useEffect, useReducer } from 'react';

import { useAuthContext } from '../../store/AuthContext';

import Card from '../UI/Card';
import Button from '../UI/Button';
import Input from '../UI/Input';

import { loginReducer, initialFormState } from './loginReducer';

import classes from './Login.module.css';

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
        <Input
          label='E-Mail'
          type='email'
          id='email'
          value={form.email.value}
          isValid={form.email.isValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          label='Password'
          type='password'
          id='password'
          value={form.pass.value}
          isValid={form.pass.isValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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
