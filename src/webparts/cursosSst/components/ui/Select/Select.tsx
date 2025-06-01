import React, { SelectHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Select.module.scss';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

const Select: React.FC<SelectProps> = ({ error = false, className, children, ...props }) => {
  return (
    <select className={classNames(styles.select, { [styles.error]: error }, className)} {...props}>
      {children}
    </select>
  );
};

export default Select;