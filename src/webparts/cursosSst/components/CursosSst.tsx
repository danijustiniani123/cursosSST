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
import TituloDualAnimado from './ui/TituloDualAnimado/TituloDualAnimado';
import CuadroInteractivo from './ui/CuadroInteractivo/CuadroInteractivo';
import Modal from './ui/Modal/Modal';

const CursosSst: React.FC<ICursosSstProps> = (props) => {
  const [pantalla, setPantalla] = React.useState<number>(1);
  const [isDarkTheme, setIsDarkTheme] = React.useState(props.isDarkTheme);
  const [mostrarModal, setMostrarModal] = React.useState<boolean>(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('modo-oscuro', newTheme);
  };

  const renderPantallaActual = () => {
    switch (pantalla) {
      case 1:
        return (
          <>
            <Bienvenida
              isDarkTheme={isDarkTheme}
              onIniciar={() => setPantalla(2)}
              sp={props.sp}
            />

          </>
        );
      case 2:
        return (
          <>
            <TituloDualAnimado
              isDarkTheme={isDarkTheme}
              tituloIzquierdo="Escaleras fijas"
              tituloDerecho="Caída al mismo nivel"
            />
            <SegundaPantalla
              isDarkTheme={isDarkTheme}
              sp={props.sp}
              onAbrirModal={() => setMostrarModal(true)}
            />
            <CuadroInteractivo curso="escalerafija" />
          </>
        );
      default:
        return <div>Pantalla no disponible</div>;
    }
  };

  return (
    <div className={styles.contenedorWebpart}>
      {/* Fondo global común */}
      <div className={`${fondos.fondoBase} ${isDarkTheme ? fondos.fondoOscuro : fondos.fondoClaro}`} />

      {/* Toggle de tema */}
      <ThemeToggle isDarkMode={isDarkTheme} onToggle={toggleTheme} />

      {/* Efecto de burbujas */}
      <Burbujas isDarkMode={isDarkTheme} />

      {/* Logo fijo */}
      <div className={styles.logoContainer}>
        <Logo isDarkTheme={isDarkTheme} />
      </div>

      {/* Contenido dinámico */}
      <div className={styles.contenidoPrincipal}>
        {renderPantallaActual()}
      </div>

      {/* Modal renderizado al final, pero dentro del webpart */}
      <Modal
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        title="Nuestra Metodología"
        description="Combinamos teoría y práctica con elementos visuales y actividades interactivas para maximizar el aprendizaje."
        imageSrc={require('../assets/Muestra1.png')}
      />
    </div>
  );
};

export default CursosSst;