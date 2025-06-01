import * as React from 'react';
import styles from './SegundaPantalla.module.scss';
import Logo from '../../Logo/Logo';
import { motion } from 'framer-motion';
import { SPFI } from '@pnp/sp';
import img1 from '../../../assets/Muestra1.png';
import img2 from '../../../assets/muestra2.jpg';
import img3 from '../../../assets/muestra3.jpg';
import img4 from '../../../assets/muestra4.png';

interface SegundaPantallaProps {
  isDarkTheme: boolean;sp: SPFI;
}

const SegundaPantalla: React.FC<SegundaPantallaProps> = ({ isDarkTheme }) => {
  const imagenes = [img1, img2, img3, img4];

  return (
    <div className={`${styles.container} ${isDarkTheme ? styles['modo-oscuro'] : ''}`}>
      <Logo isDarkTheme={isDarkTheme} />

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

        <div className={styles.grid}>
          {imagenes.map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`imagen-${index + 1}`}
              className={styles.imagen}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 * index }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SegundaPantalla;