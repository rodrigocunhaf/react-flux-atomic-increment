import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import counterStore from './stores/counter';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOMClient.createRoot(rootElement).render(
  <Provider store={counterStore}>
    <App />
  </Provider>
);
