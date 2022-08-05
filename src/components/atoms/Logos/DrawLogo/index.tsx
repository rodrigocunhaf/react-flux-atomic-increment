import React from 'react';
import style from './index.module.scss';

export type DrawLogoProps = {
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  id?: string;
  logoFileName: string;
  logoDescription: string;
  // eslint-disable-next-line react/require-default-props, react/no-unused-prop-types
  logoName?: string;
};

const DrawLogo = ({ logoFileName, logoDescription }: DrawLogoProps) => (
  <img
    className={style['draw-logo']}
    src={`${process.env.PUBLIC_PATH}/assets/images/logos/${logoFileName}`}
    alt={logoDescription}
  />
);

export { DrawLogo };
