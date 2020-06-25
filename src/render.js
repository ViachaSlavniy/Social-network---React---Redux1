import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {newPost} from "./redux/state";


let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} newPost={newPost}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default rerenderTree;

serviceWorker.unregister();
