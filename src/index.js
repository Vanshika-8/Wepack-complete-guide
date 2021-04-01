require('file-loader?name=[name].[ext]!./index.html')

import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

const getUserModule = () => import("./common/usersAPI");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    getUserModule().then(({ getUsers }) => {
      getUsers().then(json => console.log(json));
    });
  });
ReactDOM.render(<App/>,document.getElementById('app'))