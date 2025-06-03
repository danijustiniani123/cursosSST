import React from 'react';
import styles from './ThemeToggle.module.scss';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      className={`${styles.toggle} ${isDarkMode ? styles.dark : ''}`}
      type="button"
    >
      {/* Sol sólo visible en modo claro */}
      <div className={styles.icon} style={{ opacity: isDarkMode ? 0.3 : 1 }}>
        <Sun size={20} />
      </div>

      {/* Luna sólo visible en modo oscuro */}
      <div className={styles.icon} style={{ opacity: isDarkMode ? 1 : 0.3 }}>
        <Moon size={20} />
      </div>

      {/* Thumb sin icono */}
      <div className={styles.thumb}></div>
    </button>
  );
};

export default ThemeToggle;
