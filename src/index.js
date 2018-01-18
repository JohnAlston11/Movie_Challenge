import React from 'react';
import {render} from 'react-dom';
import { Link, Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './style.css';

render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>, 
  document.getElementById('root')

);