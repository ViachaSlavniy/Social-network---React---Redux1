import React from 'react';
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
            <div className="app-wrapper">
                <Header/>
                <Nav state={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={ () => <Profile
                        profilePage={props.state.profilePage}
                        newPost={props.newPost}
                        updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs
                        messagesPage={props.state.messagesPage}
                        newMessage={props.newMessage}
                        updateNewMessageText={props.updateNewMessageText}/>}/>
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
