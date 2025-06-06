import styles from './SegundaPantalla.module.scss';
import React from 'react';
import { motion } from 'framer-motion';
import { SPFI } from '@pnp/sp';
import Button from '../../ui/Button/Button';

interface SegundaPantallaProps {
  isDarkTheme: boolean;
  sp: SPFI;
  onAbrirModal: () => void;
}

const SegundaPantalla: React.FC<SegundaPantallaProps> = ({ isDarkTheme, onAbrirModal }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.h2
          className={isDarkTheme ? styles.textLight : styles.textDark}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Nuestra Metodología de Enseñanza
        </motion.h2>

        <motion.p
          className={isDarkTheme ? styles.textLight : styles.textDark}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          En este curso interactivo, aprenderás mediante recursos visuales, ejemplos reales y dinámicas de participación activa.
        </motion.p>

        <Button onClick={onAbrirModal}>
          + info
        </Button>
      </div>
    </div>
  );
};

export default SegundaPantalla;