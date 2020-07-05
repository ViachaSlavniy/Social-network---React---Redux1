import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import SideBarFriendsContainer from "./SideBarFriends/SideBarFriendsContainer";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
                <SideBarFriendsContainer store={props.store}/>
            </div>
        </nav>
    )
}

export default Nav;