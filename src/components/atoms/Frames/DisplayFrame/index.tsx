import React from 'react';
import style from './index.module.scss';

const DisplayFrame = ({ children }: { children: React.ReactNode }) => (
  <div className={style['display-frame']}>{children}</div>
);

export { DisplayFrame };
