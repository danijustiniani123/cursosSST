import React from 'react';
import styles from './ThemeToggle.module.scss';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  isDarkMode, 
  onToggle 
}) => {
  return (
    <button
      onClick={onToggle}
      className={styles.toggle}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      <div className={`${styles['toggle-track']} ${isDarkMode ? styles.dark : ''}`}>
        <div className={styles['toggle-thumb']}>
          {isDarkMode ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;