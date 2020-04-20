import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Heading from './components/Heading'


ReactDOM.render(
  <BrowserRouter>
    <Heading/>
  </BrowserRouter>,
  document.getElementById('root')
);


