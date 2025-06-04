import * as React from 'react';
import styles from './Bienvenida.module.scss';
import { motion } from 'framer-motion';
import { SPFI } from '@pnp/sp';

export interface BienvenidaProps {
  isDarkTheme: boolean;
  onIniciar: () => void;
  sp: SPFI;
}

const Bienvenida: React.FC<BienvenidaProps> = ({ isDarkTheme, onIniciar, sp }) => {
  return (
    <div className={styles.container}>
      {/* Fondo con z-index bajo */}
    
      {/* Contenido textual centrado */}
      <div className={styles.content}>
        <motion.h1 
          className={styles.titulo} 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Escaleras fijas!
        </motion.h1>

        <motion.p 
          className={styles.subtitulo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Caidas a distinto nivel.
        </motion.p>
      </div>
    </div>
  );
};

export default Bienvenida;