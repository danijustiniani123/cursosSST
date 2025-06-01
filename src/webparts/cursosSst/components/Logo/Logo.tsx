import * as React from 'react';
import azul from '../../assets/azul.png';
import blanco from '../../assets/blanco.png';

export interface LogoProps {
  isDarkTheme: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDarkTheme }) => {
  const logoSrc = isDarkTheme ? blanco : azul;

  return (
    <img
      src={logoSrc}
      alt="Logo"
      style={{ width: '150px', height: 'auto' }}
    />
  );
};

export default Logo;