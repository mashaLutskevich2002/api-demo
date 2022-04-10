import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {ContextWrapper} from "./Сontext/tokenContext";
import Main from "./MainPage/Main";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <ContextWrapper>
            <Main/>
        </ContextWrapper>
    </BrowserRouter>,
  document.getElementById('root')
);
