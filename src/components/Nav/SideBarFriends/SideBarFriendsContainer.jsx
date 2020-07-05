import React from 'react';
import s from './SideBarFriends.module.css';
import {NavLink} from "react-router-dom";
import SideBarFriends from "./SideBarFriends";

const SideBarFriendsContainer = (props) => {
    let state = props.store.getState();

    // let sideBarFriendsElements = props.state.sidebar.friends.map(sdBarFr => (<div>
    //             <NavLink to="/"><img className={s.userAva} src={sdBarFr.img}/></NavLink>
    //             <NavLink to="/">{sdBarFr.name}</NavLink>
    //         </div>)
    // )

    return (
        <SideBarFriends friends={state.sidebar.friends}/>
    )
}

export default SideBarFriendsContainer;