import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
    {id: 1, name: 'Dmitriy'},
    {id: 2, name: 'Viacheslav'},
    {id: 3, name: 'Michael'},
    {id: 4, name: 'Igor'},
    {id: 5, name: 'Sergey'}

];

let messagesData = [
    {message: "Hello!"},
    {message: "How are you?"},
    {message: "Let's go to train"},
    {message: "I'm fine"},
    {message: "UUUU ska"}
];

let postsData = [
    {id: 1, message: "Hey, how are you?", likesCounts: 15},
    {id: 2, message: "It is my first post", likesCounts: 20}
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
