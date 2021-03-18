import React from 'react';
import s from './Users.module.css'
import unknownUser from './../../assets/images/unknown-user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import { UserType } from '../../types/types';

type UsersType = {
    users: Array<UserType>
    currentPage: number
    totalUsersCount: number
    pageSize: number
    portionSize: number
    isFollowingProgress: Array<number>
    onPageChanged: (pageNumber:number) => void
    unfollow: (id: number) => void
    follow: (id: number) => void
}

const Users:React.FC<UsersType> = (props) => {

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
                                         alt="avatar"/>
                                </NavLink>
                                {u.followed
                                    ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                        props.unfollow(u.id)
                                    }} className={s.followBtn}>Unfollow</button>
                                    : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                        props.follow(u.id)
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