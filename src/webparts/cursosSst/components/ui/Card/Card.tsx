import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  className?: string;
  shadow?: boolean;
  padding?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, shadow = true, padding = true }) => {
  return (
    <div
      className={classNames(
        styles.card,
        { [styles.shadow]: shadow, [styles.padding]: padding },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;