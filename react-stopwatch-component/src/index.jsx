import React from 'react';
import ReactDOM from 'react-dom/client';
import Stopwatch from './stopwatch.jsx';

const page = <Stopwatch />;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(page);
