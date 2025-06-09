import * as React from 'react';
import LayoutGlobal from './components/layout/LayoutGlobal';
import Loader from './components/ui/Loader/Loader';
import { cursosDisponibles, CursoID } from './utils/cursosDisponibles';
import { ICursosSstProps } from './ICursosSstProps';
import './styles/global.scss';  // importa aquí para que aplique globalmente

import { FondoProvider } from './_context/FondoContext';

const CursosSst: React.FC<ICursosSstProps> = (props) => {
   const [isDarkTheme, setIsDarkTheme] = React.useState(props.isDarkTheme);
 const [cursoSeleccionado] = React.useState<CursoID>('escalerafija');
  const [CursoActivo, setCursoActivo] = React.useState<React.LazyExoticComponent<React.FC<ICursosSstProps>> | null>(null);

  const toggleTheme = () => {
     setIsDarkTheme(prev => !prev);

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
      <LayoutGlobal
        isDarkTheme={isDarkTheme}
        onToggleTheme={toggleTheme}
      >
      {/*}
       <div className="selectorCurso">
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
</div>*/}

        <React.Suspense fallback={<Loader />}>
          {CursoActivo && <CursoActivo {...props} isDarkTheme={isDarkTheme} />}
        </React.Suspense>
      </LayoutGlobal>
    </FondoProvider>
  );
};

export default CursosSst;