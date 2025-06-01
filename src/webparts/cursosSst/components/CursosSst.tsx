import * as React from 'react';
import { useState } from 'react';
import Bienvenida from './Pantallas/Bienvenida/Bienvenida';
import SegundaPantalla from './Pantallas/SegundaPantalla/SegundaPantalla';
import ThemeToggle from './ui/ThemeToggle/ThemeToggle';
import Burbujas from './Burbujas/Burbujas';
import styles from './CursosSst.module.scss';
import { ICursosSstProps } from './ICursosSstProps'; // Importa la interfaz

const CursosSst: React.FC<ICursosSstProps> = (props) => {
  const [pantalla, setPantalla] = useState<'bienvenida' | 'segunda'>('bienvenida');
  const [isDarkTheme, setIsDarkTheme] = useState(props.isDarkTheme);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.body.classList.toggle('dark-mode', newTheme);
  };

  return (
    <div className={`${styles.contenedorWebpart} ${isDarkTheme ? 'dark-mode' : ''}`}>
      <Burbujas isDarkMode={isDarkTheme} />
      
      <div className={styles.contenidoPrincipal}>
        <ThemeToggle isDarkMode={isDarkTheme} onToggle={toggleTheme} />
        
        {pantalla === 'bienvenida' ? (
          <Bienvenida 
            isDarkTheme={isDarkTheme}
            onIniciar={() => setPantalla('segunda')}
            sp={props.sp} // Pasa `sp` al componente hijo
          />
        ) : (
          <SegundaPantalla 
            isDarkTheme={isDarkTheme}
            sp={props.sp} // Pasa `sp` al componente hijo
          />
        )}
      </div>
    </div>
  );
};

export default CursosSst;