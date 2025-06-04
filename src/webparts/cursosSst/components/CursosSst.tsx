import * as React from 'react';
import Bienvenida from './Pantallas/Bienvenida/Bienvenida';
import SegundaPantalla from './Pantallas/SegundaPantalla/SegundaPantalla';
import ThemeToggle from './ui/ThemeToggle/ThemeToggle';
import Burbujas from './Burbujas/Burbujas';
import styles from './CursosSst.module.scss';
import Logo from './Logo/Logo';
import '../styles/global.scss';
import fondos from '../styles/fondos.module.scss';
import { ICursosSstProps } from './ICursosSstProps';
import Button from './ui/Button/Button';

const CursosSst: React.FC<ICursosSstProps> = (props) => {
  const [pantalla, setPantalla] = React.useState<'bienvenida' | 'segunda'>('bienvenida');
  const [isDarkTheme, setIsDarkTheme] = React.useState(props.isDarkTheme);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('modo-oscuro', newTheme);
  };

  return (
    <div className={styles.contenedorWebpart} >

      {/* Fondo relativo a la webpart */}
      <div className={`${fondos.fondoBase} ${isDarkTheme ? fondos.fondoOscuro : fondos.fondoClaro}`} />

      <ThemeToggle isDarkMode={isDarkTheme} onToggle={toggleTheme} />
      <Burbujas isDarkMode={isDarkTheme} />

      {/* Logo fijo en la esquina inferior izquierda */}
      <div className={styles.logoContainer}>
        <Logo isDarkTheme={isDarkTheme} />
      </div>

      <div className={styles.contenidoPrincipal}>
        {pantalla === 'bienvenida' ? (
          <>
            <Bienvenida
              isDarkTheme={isDarkTheme}
              onIniciar={() => setPantalla('segunda')}
              sp={props.sp}
            />
            <div className={styles.botonCentrado}>
              <Button onClick={() => setPantalla('segunda')}>
                Iniciar
              </Button>
            </div>
          </>
        ) : (
          <SegundaPantalla
            isDarkTheme={isDarkTheme}
            sp={props.sp}
          />
        )}
      </div>
    </div>
  );
};

export default CursosSst;