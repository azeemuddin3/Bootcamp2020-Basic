import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello'


ReactDOM.render(
  <div>
    <App name ='Noor ' age ='10'/>
    <Hello/>
  </div> , document.querySelector('#root')
)

