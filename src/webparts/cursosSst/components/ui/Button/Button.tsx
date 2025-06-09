import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string; // opcional y con el nombre correcto
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  iconLeft,
  iconRight,
  className,
  ...props
}) => {
  const buttonClass = clsx(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.fullWidth]: fullWidth,
    },
    className
  );

  return (
    <button
      aria-label={ariaLabel}
      className={buttonClass}
      {...props}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;