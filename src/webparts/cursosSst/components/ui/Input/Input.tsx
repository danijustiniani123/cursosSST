import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ label, fullWidth, className, ...props }) => {
  return (
    <div className={classNames(styles.inputWrapper, { [styles.fullWidth]: fullWidth })}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={classNames(styles.input, className)} {...props} />
    </div>
  );
};

export default Input;