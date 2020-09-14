import React from 'react';
import s from './Users.module.css'
import unknownUser from './../../assets/images/unknown-user.png'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import Paginator from "../Common/Paginator/Paginator";

const Users = (props) => {


    return (
        <div>
            <Paginator currentPage={props.currentPage}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       onPageChanged={props.onPageChanged}
                       portionSize={props.portionSize}/>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div className={s.userItem}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={s.avatar} src={u.photos.small ? u.photos.small : unknownUser}
                                         alt="userPhoto"/>
                                </NavLink>
                                {u.followed
                                    ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                        // props.toggleFollowingProgress(true, u.id)
                                        // usersAPI.unfollow(u.id)
                                        //     .then((data) => {
                                        //         if(data.resultCode === 0) {
                                        //             props.unfollow(u.id)
                                        //         }
                                        //         props.toggleFollowingProgress(false, u.id)
                                        //     })
                                    }} className={s.followBtn}>Unfollow</button>
                                    : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
                                        // props.toggleFollowingProgress(true, u.id)
                                        // usersAPI.follow(u.id)
                                        //     .then((data) => {
                                        //         if (data.resultCode === 0) {
                                        //             props.follow(u.id)
                                        //         }
                                        //         props.toggleFollowingProgress(false, u.id)
                                        //     })
                                    }} className={s.followBtn}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}


export default Users;