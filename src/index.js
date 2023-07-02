import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootStore from './rootStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={rootStore}>
    <App />
  </Provider>
);
reportWebVitals();
