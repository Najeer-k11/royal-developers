import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// Global styles first so component styles can build on them.
import './styles/tokens.css';
import './styles/base.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
