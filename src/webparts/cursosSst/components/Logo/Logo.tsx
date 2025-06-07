import * as React from 'react';
import azul from '../../assets/image/azul.png';
import blanco from '../../assets/image/blanco.png';

export interface LogoProps {
  isDarkTheme: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDarkTheme }) => {
  const logoSrc = isDarkTheme ? blanco : azul;

  return (
    <img
      src={logoSrc}
      alt="Logo"
      style={{ width: '180px', height: 'auto' }}
    />
  );
};

export default Logo;