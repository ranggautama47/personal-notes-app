import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

// import style
import './styles/variables.css';
import './styles/style.css';
import './styles/darkmode.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
