import React from 'react';
import style from './index.module.scss';

const ContentFrame = ({ children }: { children: React.ReactNode }) => (
  <section className={style['content-frame']}>{children}</section>
);

export { ContentFrame };
