import * as React from 'react';
import ThemeToggle from './components/ui/ThemeToggle/ThemeToggle';
import Burbujas from './components/Burbujas/Burbujas';
import styles from './CursosSst.module.scss';
import Logo from './components/Logo/Logo';
import './styles/global.scss';
import { ICursosSstProps } from './ICursosSstProps';
import { FondoProvider } from './_context/FondoContext';
import FondoPantalla from './components/ui/FondoPantalla/FondoPantalla';
import Loader from './components/ui/Loader/Loader';
import { cursosDisponibles, CursoID } from './utils/cursosDisponibles';

const CursosSst: React.FC<ICursosSstProps> = (props) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(props.isDarkTheme);
  const [cursoSeleccionado, setCursoSeleccionado] = React.useState<CursoID>('escalerafija');
  const [CursoActivo, setCursoActivo] = React.useState<React.LazyExoticComponent<React.FC<ICursosSstProps>> | null>(null);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    document.documentElement.classList.toggle('modo-oscuro', newTheme);
  };

  React.useEffect(() => {
    const cargarCurso = async () => {
      const modulo = await cursosDisponibles[cursoSeleccionado]();
      setCursoActivo(React.lazy(() => Promise.resolve({ default: modulo.default })));
    };

    cargarCurso();
  }, [cursoSeleccionado]);

  return (
    <FondoProvider>
      <div className={styles.contenedorWebpart}>
        {/* Fondo dinámico */}
        <FondoPantalla isDarkTheme={isDarkTheme} />

        {/* Contenido principal */}
        <div className={styles.contenidoPrincipal}>
          <ThemeToggle isDarkMode={isDarkTheme} onToggle={toggleTheme} />
          <Logo isDarkTheme={isDarkTheme} />

          {/* Selector de curso */}
          <select
            value={cursoSeleccionado}
            onChange={(e) => setCursoSeleccionado(e.target.value as CursoID)}
          >
            {Object.keys(cursosDisponibles).map((curso) => (
              <option key={curso} value={curso}>
                {curso}
              </option>
            ))}
          </select>

          {/* Carga diferida del curso */}
          <React.Suspense fallback={<Loader />}>
            {CursoActivo && <CursoActivo {...props} isDarkTheme={isDarkTheme} />}
          </React.Suspense>
        </div>

        {/* Burbujas visuales */}
        <Burbujas isDarkMode={isDarkTheme} />
      </div>
    </FondoProvider>
  );
};

export default CursosSst;