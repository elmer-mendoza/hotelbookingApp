import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchOptionContextProvider } from './context/searchOptionContextProvider';
import { AuthContextProvider } from './context/authContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <SearchOptionContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </SearchOptionContextProvider>
  </AuthContextProvider>
);


