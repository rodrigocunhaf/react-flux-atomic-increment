import React from 'react';
import style from './index.module.scss';

const ListLogoItem = ({ children }: { children: React.ReactNode }) => (
  <li className={style['list-logo-item']}>{children}</li>
);

export { ListLogoItem };
