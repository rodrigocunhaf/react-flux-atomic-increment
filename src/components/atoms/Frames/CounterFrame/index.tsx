import React from 'react';
import style from './index.module.scss';

const CounterFrame = ({ children }: { children: React.ReactNode }) => (
  <span className={style['counter-frame']}>{children}</span>
);

export { CounterFrame };
