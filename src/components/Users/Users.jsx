import React from 'react';
import s from './Users.module.css'
import unknownUser from './../../assets/images/unknown-user.png'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.pagination}>
                {pages.map(p => {return <span onClick={ () => {props.onPageChanged(p)}} className={props.currentPage === p && s.selectedPage}>{p}</span>})}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div className={s.userItem}>
                            <div>
                                <img className={s.avatar} src={u.photos.small ? u.photos.small : unknownUser}
                                     alt="userPhoto"/>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }} className={s.followBtn}>Unfollow</button>
                                    : <button onClick={() => {
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