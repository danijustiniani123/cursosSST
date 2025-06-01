import React from 'react';
import styles from './ProgressBar.module.scss';

interface ProgressBarProps {
  progress: number; // 0 - 100
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, className }) => {
  const value = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={`${styles.progressBar} ${className || ''}`}>
      <div
        className={styles.progress}
        style={{ width: `${value}%` }}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
};

export default ProgressBar;