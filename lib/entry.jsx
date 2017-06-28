import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = createStore();
  ReactDOM.render(<App store={ store }/>, root);
});
