import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.scss';

const rootElement: HTMLElement | null = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
