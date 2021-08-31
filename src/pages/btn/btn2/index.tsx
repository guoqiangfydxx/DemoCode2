/** @format */

import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './index.module.scss';

interface Props {
  buttonName: ReactNode;
  style?: object;
  className?: string;
  onClick: () => void;
  children?: ReactNode
}
function Button({ buttonName, onClick, className = '', style = {}, children }: Props) {
  return (
    <div
      className={cx(styles.btn, styles.baseBtn, className)}
      onClick={onClick}
      style={style}
    >
      {buttonName}
      {children}
    </div>
  );
}

export default Button;
