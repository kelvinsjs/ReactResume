import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";

ReactDOM.render(
    <React.StrictMode>
        <Header/>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
);
