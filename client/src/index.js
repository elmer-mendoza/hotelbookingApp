import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchOptionContextProvider } from './context/searchOptionContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchOptionContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SearchOptionContextProvider>
);


