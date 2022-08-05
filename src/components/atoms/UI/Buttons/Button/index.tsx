import React from 'react';
import style from './index.module.scss';

export type ButtonProps = {
  children: React.ReactNode;
  onClickHandler: Function;
  styleButton: string;
};

const selectStyle = (styleTheme: string): string => {
  switch (styleTheme) {
    case 'RED':
      return style.red;
    case 'BLUE':
      return style.blue;
    case 'GREEN':
      return style.green;
    default:
      return 'not-themed-button';
  }
};

const Button = ({ children, onClickHandler, styleButton }: ButtonProps) => {
  const css = selectStyle(styleButton);
  return (
    <button
      className={`${style.button} ${css}`}
      type="button"
      onClick={() => {
        onClickHandler();
      }}
    >
      {children}
    </button>
  );
};

export { Button };
