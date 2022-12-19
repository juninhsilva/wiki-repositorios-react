import React from "react";
import GlobalStyles from './styles';
import ReactDOM from 'react-dom/client';
import App from './pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles/>
    <App />
  </React.StrictMode>
);
