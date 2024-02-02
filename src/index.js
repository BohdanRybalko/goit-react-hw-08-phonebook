import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
