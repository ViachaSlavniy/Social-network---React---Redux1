import React from 'react';
import s from './SideBarFriends.module.css';
import {NavLink} from "react-router-dom";
import {FrinedType} from '../../../types/types';

type SidebarType = {
    friends: Array<FrinedType>
}

const SideBarFriends:React.FC<SidebarType> = (props) => {
    let sideBarFriendsElements = props.friends.map(friend => (
            <div key={friend.id}>
                <NavLink to="/"><img className={s.userAva} src={friend.img} alt="avatar"/></NavLink>
                <NavLink to="/">{friend.name}</NavLink>
            </div>)
    )

    return (
        <div className={s.someFriends}>
            {sideBarFriendsElements}
        </div>
    )
}

export default SideBarFriends;