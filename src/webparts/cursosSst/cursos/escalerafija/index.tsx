import * as React from 'react';
import TituloDualAnimado from '../../components/ui/TituloDualAnimado/TituloDualAnimado';
import FlechasNavegacion from '../../components/ui/FlechasNavegacion/FlechasNavegacion';
import Presentacion from './pantallas/Presentacion/Presentacion';
import SegundaPantalla from './pantallas/SegundaPantalla/SegundaPantalla';
import TerceraPantalla from './pantallas/TerceraPantalla/TerceraPantalla';
import Loader from '../../components/ui/Loader/Loader';
import { ICursosSstProps } from '../../ICursosSstProps';

const EscalerafijaCurso: React.FC<ICursosSstProps> = (props) => {
  const [pantalla, setPantalla] = React.useState(1);
  const [mostrarDesplegable, setMostrarDesplegable] = React.useState(false);
  const isDarkTheme = props.isDarkTheme;

  const renderPantallaActual = () => {
    switch (pantalla) {
      case 1:
        return (
          <Presentacion onIniciar={() => setPantalla(2)} />
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
            <SegundaPantalla /> {/* Ya no necesita props para modal */}
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
            <TerceraPantalla
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
    <React.Suspense fallback={<Loader />}>
      <>
        {renderPantallaActual()}
        {/* Solo mantenemos este overlay general si lo usas en la tercera pantalla */}
        {mostrarDesplegable && (
          <div
            className="overlayGeneral"
            onClick={() => setMostrarDesplegable(false)}
          />
        )}
      </>
    </React.Suspense>
  );
};

export default EscalerafijaCurso;