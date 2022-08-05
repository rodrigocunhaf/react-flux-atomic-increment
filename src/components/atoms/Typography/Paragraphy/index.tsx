import React from 'react';
import style from './index.module.scss';

const Paragraphy = ({ children }: { children: React.ReactNode }) => (
  <p className={style.paragraphy}>{children}</p>
);

export { Paragraphy };
