import React from 'react';
import style from './index.module.scss';

const ListButton = ({ children }: { children: React.ReactNode }) => (
  <ul className={style['list-button']}>{children}</ul>
);

export { ListButton };
