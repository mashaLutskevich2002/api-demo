import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextWrapper} from "./Сontext/context";

ReactDOM.render(
  <ContextWrapper>
      <App />
  </ContextWrapper>,
  document.getElementById('root')
);
