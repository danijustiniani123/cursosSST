import React from 'react';
import styles from './Burbujas.module.scss';

interface BurbujasProps {
  isDarkMode: boolean;
}

const Burbujas: React.FC<BurbujasProps> = ({ isDarkMode }) => {
  // Colores y sombras según tema
  const bubblesData = [
    {
      key: 1,
      size: 220,
      top: '15%',
      left: '10%',
      lightBg: 'radial-gradient(circle at 30% 30%, #99c7e5, #005d9d 70%)',
      darkBg: 'radial-gradient(circle at 30% 30%, #2c3e50, #34495e 70%)',
    },
    {
      key: 2,
      size: 150,
      top: '60%',
      left: '65%',
      lightBg: 'radial-gradient(circle at 30% 30%, #99c7e5, #005d9d 70%)',
      darkBg: 'radial-gradient(circle at 30% 30%, #2c3e50, #34495e 70%)',
    },
    {
      key: 3,
      size: 180,
      top: '40%',
      left: '40%',
      lightBg: 'radial-gradient(circle at 30% 30%, #99c7e5, #005d9d 70%)',
      darkBg: 'radial-gradient(circle at 30% 30%, #2c3e50, #34495e 70%)',
    },
  ];

  return (
    <div className={styles.contenedorBurbujas}>
      {bubblesData.map(({ key, size, top, left, lightBg, darkBg }) => (
        <div
          key={key}
          className={styles.burbuja}
          style={{
            width: size,
            height: size,
            top,
            left,
            background: isDarkMode ? darkBg : lightBg,
            animationDelay: `${key * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Burbujas;