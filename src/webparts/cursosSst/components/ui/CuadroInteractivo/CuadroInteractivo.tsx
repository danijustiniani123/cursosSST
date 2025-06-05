import * as React from 'react';
import styles from './CuadroInteractivo.module.scss';

interface CuadroInteractivoProps {
  curso: string;
}

const imagenesPorCurso: Record<string, string[]> = {
  escalerafija: [
    require('../../../assets/Muestra1.png'),
    require('../../../assets/muestra2.jpg'),
    require('../../../assets/muestra3.jpg'),
    require('../../../assets/muestra4.png'),
  ],
  otroCurso: [
    require('../../../assets/Muestra1.png'),
    require('../../../assets/muestra2.jpg'),
    require('../../../assets/muestra3.jpg'),
    require('../../../assets/muestra4.png'),
  ],
};

const CuadroInteractivo: React.FC<CuadroInteractivoProps> = ({ curso }) => {
  const [zoomImg, setZoomImg] = React.useState<string | null>(null);
  const [zoomVisible, setZoomVisible] = React.useState(false);

  const imagenes = imagenesPorCurso[curso] || imagenesPorCurso['escalerafija'];

  const handleClick = (src: string) => {
    setZoomImg(src);
    setZoomVisible(true);
  };

  const handleCerrarZoom = () => {
    setZoomVisible(false);
    setZoomImg(null);
  };

  return (
    <>
      <div className={styles.contenedorPrincipal}>
        <div className={styles.cuadrosGrid}>
          {imagenes.map((src, index) => (
            <div
              key={index}
              className={styles.cuadroNegro}
              onClick={() => handleClick(src)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') handleClick(src);
              }}
            >
              <img src={src} alt={`Imagen ${index + 1}`} className={styles.imagen} />
              <div className={styles.hoverOverlay} />
            </div>
          ))}
        </div>
      </div>

      {zoomVisible && zoomImg && (
        <div className={styles.zoomOverlay} onClick={handleCerrarZoom}>
          <img src={zoomImg} alt="Imagen ampliada" className={styles.zoomImage} />
        </div>
      )}
    </>
  );
};

export default CuadroInteractivo;