import React, { TextareaHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Textarea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ error = false, className, ...props }) => {
  return (
    <textarea
      className={classNames(styles.textarea, { [styles.error]: error }, className)}
      {...props}
    />
  );
};

export default Textarea;