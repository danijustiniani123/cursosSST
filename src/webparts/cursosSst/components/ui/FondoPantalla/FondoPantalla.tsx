import React from 'react';
import { useFondo } from '../../../_context/FondoContext';
import { fondos } from '../../../_config/fondos.config';
import styles from './FondoPantalla.module.scss';

export interface FondoPantallaProps {
  isDarkTheme: boolean;
}

const FondoPantalla: React.FC<FondoPantallaProps> = ({ isDarkTheme }) => {
  const { fondoActivo } = useFondo();
  const fondo = fondoActivo ? fondos[fondoActivo] : null;

  return (
<div
  className={styles.fondoPantalla}
  id={fondoActivo || undefined}
  style={{
    background: fondo
      ? (isDarkTheme ? fondo.fondoOscuro : fondo.fondoClaro)
      : undefined,
  }}
/>
  );
};

export default FondoPantalla;