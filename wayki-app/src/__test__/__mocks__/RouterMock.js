import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const RouterMock = props => (
    <Router history={history}>
      {props.children}
    </Router>
);

export default RouterMock;
