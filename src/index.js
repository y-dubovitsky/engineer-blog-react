import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter
} from "react-router-dom";
import { CookiesProvider } from './context/cookie';
import LangContextProvider from './context/lang/LangContext';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CookiesProvider>
          <LangContextProvider>
            <App />
          </LangContextProvider>
        </CookiesProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

