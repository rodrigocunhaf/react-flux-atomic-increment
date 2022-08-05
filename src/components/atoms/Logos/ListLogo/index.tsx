import React from 'react';
import style from './index.module.scss';

const ListLogo = ({ children }: { children: React.ReactNode }) => (
  <ul className={style['list-logo']}>{children}</ul>
);

export { ListLogo };
