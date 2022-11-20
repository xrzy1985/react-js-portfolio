import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import db from './state/firebase';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(<App/>);

reportWebVitals();
