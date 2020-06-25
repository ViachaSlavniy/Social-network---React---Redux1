import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import rerenderTree from "./render";

rerenderTree(state);

