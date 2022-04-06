export const initialFormState = {
  email: { value: '', isValid: null },
  pass: { value: '', isValid: null },
  isValid: null,
};

export const loginReducer = (state, { type, ...action }) => {
  const isEmailValid = (val) => val.includes('@');
  const isPassValid = (val) => val.trim().length > 6;

  switch (type) {
    case 'EMAIL_INPUT': {
      const { value } = action;

      return {
        ...state,
        email: { value, isValid: isEmailValid(value) },
      };
    }

    case 'PASSWORD_INPUT': {
      const { value } = action;

      return {
        ...state,
        pass: { value, isValid: isPassValid(value) },
      };
    }

    case 'EMAIL_VALIDATION': {
      const { email } = state;

      return {
        ...state,
        email: { ...email, isValid: isEmailValid(email.value) },
      };
    }

    case 'PASSWORD_VALIDATION': {
      const { pass } = state;

      return { ...state, pass: { ...pass, isValid: isPassValid(pass.value) } };
    }

    case 'FORM_VALIDATION': {
      const { email, pass } = state;

      return {
        ...state,
        isValid: email.isValid && pass.isValid,
      };
    }

    default:
      return initialFormState;
  }
};
