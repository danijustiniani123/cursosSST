import React from 'react';
import styles from './Button.module.scss';

// 1. Define el tipo para las clases CSS
interface ButtonStyles {
  button: string;
  primary: string;
  secondary: string;
}

// 2. Asegura que `styles` cumple con el tipo
const typedStyles: ButtonStyles = styles as ButtonStyles;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  return (
    <button
      className={`${typedStyles.button} ${typedStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;