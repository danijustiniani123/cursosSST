import * as React from 'react';
import styles from './Burbujas.module.scss';

const Burbujas: React.FC = () => {
  return (
    <div className={styles.bubblesWrapper}>
      <div className={styles.bubble} />
      <div className={styles.bubble} />
      <div className={styles.bubble} />
    </div>
  );
};

export default Burbujas;