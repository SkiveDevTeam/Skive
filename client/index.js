import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store.js';
import App from './app.jsx';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)