import React from 'react';
import styles from './Burbujas.module.scss';

interface BurbujasProps {
  isDarkMode: boolean;
}

const burbujas = [
  { top: '20%', left: '40%', size: 70, duration: '4s', delay: '0s' },
  { top: '40%', left: '5%', size: 120, duration: '5s', delay: '1s' },
  { top: '40%', left: '55%', size: 350, duration: '3.5s', delay: '0.5s' }
];

const Burbujas: React.FC<BurbujasProps> = ({ isDarkMode }) => {
  const bubbleColor = isDarkMode ? 'rgba(51, 144, 201, 0.15)' : 'rgba(0, 93, 157, 0.2)';

  return (
    <>
      {burbujas.map((bubble, index) => (
        <div
          key={index}
          className={styles.bubble3d}
          style={{
            top: bubble.top,
            left: bubble.left,
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
            '--bubble-color': bubbleColor,
            '--size': `${bubble.size}px`,
          } as React.CSSProperties}
        />
      ))}
    </>
  );
};

export default Burbujas;