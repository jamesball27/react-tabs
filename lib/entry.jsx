import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import createStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<App store={ store }/>, root);
});
