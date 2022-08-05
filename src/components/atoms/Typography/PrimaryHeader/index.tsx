import React from 'react';
import style from './index.module.scss';

const PrimaryHeader = ({ children }: { children: React.ReactNode }) => (
  <h1 className={style['primary-header']}>{children}</h1>
);

export { PrimaryHeader };
