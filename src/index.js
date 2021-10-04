import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import "../src/assets/font/css/v.css";
import "../src/assets/ft/css/ft.css";
import { MuiThemeProvider } from "@material-ui/core/styles";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <MuiThemeProvider >
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
