import React from 'react';
import styles from './FlechasNavegacion.module.scss';

interface FlechasNavegacionProps {
  isDarkMode: boolean;
  onAnteriorClick: () => void;
  onSiguienteClick: () => void;
}

const FlechasNavegacion: React.FC<FlechasNavegacionProps> = ({
  isDarkMode,
  onAnteriorClick,
  onSiguienteClick,
}) => {
  const color = isDarkMode ? '#FFFFFF' : '#005d9d'; // blanco en oscuro, azul corporativo en claro

  return (
    <>
      <button
        className={`${styles.flecha} ${styles.izquierda}`}
        onClick={onAnteriorClick}
        aria-label="Página anterior"
        data-tooltip="Página anterior"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        className={`${styles.flecha} ${styles.derecha}`}
        onClick={onSiguienteClick}
        aria-label="Página siguiente"
        data-tooltip="Página siguiente"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </>
  );
};

export default FlechasNavegacion;