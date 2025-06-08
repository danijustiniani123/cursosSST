import React from 'react';
import styles from './Button.module.scss';
import { cn } from '../../../utils/cn'; // Utilidad para unir clases opcionalmente

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  iconLeft,
  iconRight,
  ariaLabel,
  className = '',
  ...props
}) => {
  return (
    <button
      className={cn(styles.button, styles[variant], className)}
      aria-label={ariaLabel}
      {...props}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;