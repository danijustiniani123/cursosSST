import React from 'react';
import { IconType } from 'react-icons';
import classNames from 'classnames';
import styles from './Icon.module.scss';

interface IconProps {
  icon: IconType;
  className?: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, className, size = 20, color }) => {
  return (
    <IconComponent
      className={classNames(styles.icon, className)}
      size={size}
      color={color}
    />
  );
};

export default Icon;