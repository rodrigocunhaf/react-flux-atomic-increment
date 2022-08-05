import React from 'react';
import style from './index.module.scss';

const GrayFrame = ({ children }: { children: React.ReactNode }) => (
  <div className={style['gray-frame']}>{children}</div>
);

export { GrayFrame };
