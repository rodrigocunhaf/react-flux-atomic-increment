import React from 'react';
import style from './index.module.scss';

const ParagraphyFrame = ({ children }: { children: React.ReactNode }) => (
  <div className={style['paragraphy-frame']}>{children}</div>
);

export { ParagraphyFrame };
