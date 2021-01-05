import React from 'react';
import s from './SideBarFriends.module.css';
import {NavLink} from "react-router-dom";

const SideBarFriends = (props) => {
    let sideBarFriendsElements = props.friends.map(sdBarFr => (
            <div key={sdBarFr.id}>
                <NavLink to="/"><img className={s.userAva} src={sdBarFr.img} alt="avatar"/></NavLink>
                <NavLink to="/">{sdBarFr.name}</NavLink>
            </div>)
    )

    return (
        <div className={s.someFriends}>
            {sideBarFriendsElements}
        </div>
    )
}

export default SideBarFriends;