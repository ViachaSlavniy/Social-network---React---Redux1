import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import Dialogs from "./components/Dialogs/Dialogs";
import s from './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div class="app-wrapper">
                <Header/>
                <Nav/>
                <div class="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile postsData={props.postsData}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/friends' render={ () => <Friends/>}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/settings' render={ () => <Settings/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
