import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import LumiPassport from './LumiPassport';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LumiPassport />
  </StrictMode>
);
