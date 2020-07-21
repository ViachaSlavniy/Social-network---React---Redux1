import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import unknownUser from './../../assets/images/unknown-user.png'

const UsersFunctionalComponent = (props) => {

    function getUsers() {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then((response) => {props.setUsers(response.data.items)});
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div className={s.userItem}>
                            <div>
                                <img className={s.avatar} src={u.photos.small ? u.photos.small : unknownUser } alt="userPhoto"/>
                                {u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}} className={s.followBtn}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}} className={s.followBtn}>Follow</button>}
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

export default UsersFunctionalComponent;