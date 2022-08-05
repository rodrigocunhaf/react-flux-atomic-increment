import React from 'react';
import style from './index.module.scss';

const LogoFrame = ({ children }: { children: React.ReactNode }) => (
  <div className={style['frame-logo']}>{children}</div>
);

export { LogoFrame };
