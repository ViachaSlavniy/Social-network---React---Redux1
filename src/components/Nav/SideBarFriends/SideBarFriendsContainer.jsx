import React from 'react';
import s from './SideBarFriends.module.css';
import SideBarFriends from "./SideBarFriends";
import StoreContext from "../../../StoreContext";

const SideBarFriendsContainer = (props) => {
    return <StoreContext>
        {(store) => {
            let state = store.getState();
            return <SideBarFriends friends={state.sidebar.friends}/>
            }
        }
    </StoreContext>
}

export default SideBarFriendsContainer;