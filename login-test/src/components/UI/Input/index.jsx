import React, { useRef, useImperativeHandle, forwardRef } from 'react';

import classes from './Input.module.css';

const Input = forwardRef(
  ({ className, id, type, label, value, isValid, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    const newClassName = `${classes.control} ${
      isValid === false && classes.invalid
    } ${className}`;

    const activate = () => {
      inputRef.current.focus();
    };

    useImperativeHandle(ref, () => ({ focus: activate }));

    return (
      <div className={newClassName}>
        <label htmlFor={id}>{label}</label>
        <input {...{ id, type, value, onChange, onBlur }} ref={inputRef} />
      </div>
    );
  },
);

export default Input;
