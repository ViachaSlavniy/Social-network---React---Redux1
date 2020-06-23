import React from 'react';
import s from './SideBarFriends.module.css';
import {NavLink} from "react-router-dom";

const SideBarFriends = (props) => {
    return (
        <div className={s.someFriends}>
            <div>
                <NavLink to="/"><img className={s.userAva} src={props.state.friends[0].img}/></NavLink>
                <NavLink to="/">{props.state.friends[0].name}</NavLink>
            </div>
            <div>
                <NavLink to="/"><img className={s.userAva} src={props.state.friends[1].img}/></NavLink>
                <NavLink to="/">{props.state.friends[1].name}</NavLink>
            </div>
            <div>
                <NavLink to="/"><img className={s.userAva} src={props.state.friends[2].img}/></NavLink>
                <NavLink to="/">{props.state.friends[2].name}</NavLink>
            </div>
        </div>
    )
}

export default SideBarFriends;