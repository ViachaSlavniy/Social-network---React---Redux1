import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {newMessage, newPost, updateNewMessageText, updateNewPostText} from './redux/state';

let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 newPost={newPost}
                 updateNewPostText={updateNewPostText}
                 newMessage={newMessage}
                 updateNewMessageText={updateNewMessageText}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(state);

subscribe(rerenderTree);



