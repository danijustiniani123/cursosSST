import * as React from 'react';
import Presentacion from './cursos/escalerafija/pantallas/Presentacion/Presentacion';
import SegundaPantalla from './cursos/escalerafija/pantallas/SegundaPantalla/SegundaPantalla';
import ThemeToggle from './components/ui/ThemeToggle/ThemeToggle';
import Burbujas from './components/Burbujas/Burbujas';
import FlechasNavegacion from './components/ui/FlechasNavegacion/FlechasNavegacion';
import styles from './CursosSst.module.scss';
import Logo from './components/Logo/Logo';
import './styles/global.scss';
import fondos from './styles/fondos.module.scss';
import { ICursosSstProps } from './ICursosSstProps';
import TituloDualAnimado from './components/ui/TituloDualAnimado/TituloDualAnimado';
import CuadroInteractivo from './components/ui/CuadroInteractivo/CuadroInteractivo';
import Modal from './components/ui/Modal/Modal';
import TercerPantalla from './cursos/escalerafija/pantallas/TerceraPantalla/TerceraPantalla';

const CursosSst: React.FC<ICursosSstProps> = (props) => {
  const [pantalla, setPantalla] = React.useState<number>(1);
  const [isDarkTheme, setIsDarkTheme] = React.useState(props.isDarkTheme);
  const [mostrarModal, setMostrarModal] = React.useState<boolean>(false);
  const [mostrarDesplegable, setMostrarDesplegable] = React.useState<boolean>(false);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('modo-oscuro', newTheme);
  };

  const renderPantallaActual = () => {
    switch (pantalla) {
      case 1:
        return (
          <Presentacion
            isDarkTheme={isDarkTheme}
            onIniciar={() => setPantalla(2)}
            sp={props.sp}
          />
        );

      case 2:
        return (
          <>
            <TituloDualAnimado
              key={pantalla}
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
            <FlechasNavegacion
              isDarkMode={isDarkTheme}
              onAnteriorClick={() => setPantalla(1)}
              onSiguienteClick={() => setPantalla(3)}
            />
          </>
        );

      case 3:
        return (
          <>
            <TituloDualAnimado
              key={pantalla}
              isDarkTheme={isDarkTheme}
              tituloIzquierdo="Escaleras fijas"
              tituloDerecho="Caída al mismo nivel"
            />
            <TercerPantalla
              onMostrarDesplegable={() => setMostrarDesplegable(true)}
              onOcultarDesplegable={() => setMostrarDesplegable(false)}
            />
            <FlechasNavegacion
              isDarkMode={isDarkTheme}
              onAnteriorClick={() => setPantalla(2)}
              onSiguienteClick={() => setPantalla(4)}
            />
          </>
        );

      default:
        return <div>Pantalla no disponible</div>;
    }
  };

  return (
    <div className={styles.contenedorWebpart}>
      {/* Fondo base */}
      <div className={`${fondos.fondoBase} ${isDarkTheme ? fondos.fondoOscuro : fondos.fondoClaro}`} />

      {/* Toggle tema */}
      <ThemeToggle isDarkMode={isDarkTheme} onToggle={toggleTheme} />

      {/* Burbujas */}
      <Burbujas isDarkMode={isDarkTheme} />

      {/* Logo */}
      <div className={styles.logoContainer}>
        <Logo isDarkTheme={isDarkTheme} />
      </div>

      {/* Overlay general controlado desde CursosSst */}
      {mostrarDesplegable && (
        <div
          className={styles.overlayGeneral}
          onClick={() => setMostrarDesplegable(false)}
        />
      )}

      {/* Pantalla dinámica */}
      <div className={styles.contenidoPrincipal}>{renderPantallaActual()}</div>

      {/* Modal principal */}
      <Modal
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        title="Nuestra Metodología"
        description="Combinamos teoría y práctica con elementos visuales y actividades interactivas para maximizar el aprendizaje."
        imageSrc={require('./assets/image/Muestra1.png')}
      />
    </div>
  );
};

export default CursosSst;