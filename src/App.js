import React from 'react';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import s from './App.css';
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    debugger;
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav store={props.store}/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
