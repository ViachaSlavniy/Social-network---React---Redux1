import React from 'react';
import s from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                photoUrl: 'https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg',
                fullName: 'Konstantin S.',
                status: 'I am OKAY',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }

            },
            {
                id: 2,
                followed: true,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt86sQ9Ya33SIwiA1tc4FGlpq1jqhimI_XVw&usqp=CAU',
                fullName: 'Vasilisa M.',
                status: 'I learn REACT',
                location: {
                    country: 'Russia',
                    city: 'Vologda'
                }

            }
        ])
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={s.wrapper}>
                        <div className={s.userItem}>
                            <div>
                                <img className={s.avatar} src={u.photoUrl} alt="userPhoto"/>
                                {u.followed
                                    ? <button onClick={() => {props.unfollow(u.id)}} className={s.followBtn}>Unfollow</button>
                                    : <button onClick={() => {props.follow(u.id)}} className={s.followBtn}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.userInfo}>
                            <div className={s.userInfoName}>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.userInfoLocation}>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default Users;