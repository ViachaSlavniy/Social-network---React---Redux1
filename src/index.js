import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import store from "./redux/state";

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderTree(store);

store.subscribe(rerenderTree);



