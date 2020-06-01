import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #d39354;
    font-size: 1.1em;
  }
`;

ReactDOM.render(
  <>
    <GlobalStyle />

    <BrowserRouter>
      <Switch>
        <Route path="/:nested?" component={App} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
