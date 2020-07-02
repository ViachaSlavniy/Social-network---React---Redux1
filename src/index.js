import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/state";
import {BrowserRouter} from "react-router-dom";

let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store.getState());

store.subscribe(rerenderTree);



