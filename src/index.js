import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './assets/redux/store';
import { CSSReset } from './Style/CSSReset';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CSSReset/>
      <App />
    </Provider>
  </React.StrictMode>
);
