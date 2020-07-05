import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";

let rerenderTree = (state) => {
    debugger;
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={store} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store);

store.subscribe(() => {
    rerenderTree(store.getState());
});



