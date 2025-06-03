import * as React from 'react';
import styles from './Bienvenida.module.scss';
import { motion } from 'framer-motion';
import Logo from '../../Logo/Logo';
import { SPFI } from '@pnp/sp';


export interface BienvenidaProps {
  isDarkTheme: boolean;
  onIniciar: () => void;
  sp: SPFI;
}

const Bienvenida: React.FC<BienvenidaProps> = ({ isDarkTheme, onIniciar,sp }) => {
  return (
    <div className={`${styles.container} ${isDarkTheme ? styles['modo-oscuro'] : ''}`}>
      <div className={styles.logoContainer}>
        <Logo isDarkTheme={isDarkTheme} />
      </div>



      <div className={styles.content}>
        <motion.h1 
          className={`${styles.titulo} ${isDarkTheme ? styles.textLight : styles.textDark}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Bienvenido!
        </motion.h1>

        <motion.p 
          className={`${styles.subtitulo} ${isDarkTheme ? styles.textLight : styles.textDark}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Comienza tu recorrido de aprendizaje interactivo.
        </motion.p>

        <motion.button 
          className={styles.boton}
          onClick={onIniciar}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Iniciar
        </motion.button>
      </div>
    </div>
  );
};

export default Bienvenida;