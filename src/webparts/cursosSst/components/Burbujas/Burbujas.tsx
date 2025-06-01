import React from 'react';
import styles from './Burbujas.module.scss';

const Burbujas = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const bubbleColor = isDarkMode 
    ? 'rgba(100, 180, 255, 0.7)' 
    : 'rgba(0, 93, 157, 0.6)';

  return (
    <div className={styles.contenedorBurbujas}>
      {/* Burbuja 1 */}
      <div className={styles.burbuja} style={{
        width: '250px',
        height: '250px',
        top: '20%',
        left: '10%',
        background: bubbleColor
      }} />
      
      {/* Burbuja 2 */}
      <div className={styles.burbuja} style={{
        width: '150px',
        height: '150px',
        top: '60%',
        left: '70%',
        background: bubbleColor
      }} />
    </div>
  );
};

export default Burbujas;