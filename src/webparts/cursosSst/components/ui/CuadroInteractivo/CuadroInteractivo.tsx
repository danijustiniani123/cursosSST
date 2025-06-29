import * as React from 'react';
import styles from './CuadroInteractivo.module.scss';

interface CuadroInteractivoProps {
  curso: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const imagenesPorCurso: Record<string, string[]> = {
  escalerafija: [
    require('../../../assets/image/Muestra1.png'),
    require('../../../assets/image/muestra2.jpg'),
    require('../../../assets/image/muestra3.jpg'),
    require('../../../assets/image/muestra4.png'),
  ],
  otroCurso: [
    require('../../../assets/image/Muestra1.png'),
    require('../../../assets/image/muestra2.jpg'),
    require('../../../assets/image/muestra3.jpg'),
    require('../../../assets/image/muestra4.png'),
  ],
};

const CuadroInteractivo: React.FC<CuadroInteractivoProps> = ({
  curso,
  width = '500px',
  height = '500px',
  backgroundColor = 'var(--color-translucido)',
  borderColor = 'var(--color-acento)',
  className = '',
  style = {},
}) => {
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
      <div
        className={`${styles.contenedorPrincipal} ${className}`}
        style={{
          width,
          height,
          background: backgroundColor,
          border: `3px solid ${borderColor}`,
          ...style,
        }}
      >
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