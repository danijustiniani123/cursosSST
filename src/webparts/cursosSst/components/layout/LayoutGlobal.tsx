import React from 'react';
import FondoPantalla from '../ui/FondoPantalla/FondoPantalla';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle';
import styles from './LayoutGlobal.module.scss';

interface LayoutGlobalProps {
  isDarkTheme: boolean;
  onToggleTheme: () => void;
  overlayContent?: React.ReactNode;
  children: React.ReactNode;
}

const LayoutGlobal: React.FC<LayoutGlobalProps> = ({
  isDarkTheme,
  onToggleTheme,
  overlayContent,
  children,
}) => {
  return (
    <div className={styles.webpartContainer}>
      {/* Fondo y burbujas en z-index bajo */}
      <FondoPantalla isDarkTheme={isDarkTheme} />

      {/* Logo en la parte superior */}
      <div className={styles.logoTop}>
        <Logo isDarkTheme={isDarkTheme} />
      </div>

      {/* Contenido principal */}
      <main className={styles.mainContent}>{children}</main>

      {/* Toggle en la parte inferior */}
      <div className={styles.themeToggleWrapper}>
        <ThemeToggle isDarkMode={isDarkTheme} onToggle={onToggleTheme} />
      </div>

      {/* Overlay modal con z-index superior */}
      {overlayContent && (
        <div className={styles.overlay}>
          {overlayContent}
        </div>
      )}
    </div>
  );
};

export default LayoutGlobal;