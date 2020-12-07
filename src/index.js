import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello'
import Room from './Room'


ReactDOM.render(
  <div>
    <App name ='Noor ' age ='10'/>
    <Hello/>
    <Room/>
  </div> , document.querySelector('#root')
)

