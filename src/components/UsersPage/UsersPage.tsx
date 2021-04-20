import React, {useEffect} from 'react';
import s from './Users.module.css'
import unknownUser from '../../assets/images/unknown-user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../Common/Paginator/Paginator";
import UsersFormikSearchForm from "./components/UserSearchForm/UserSearchForm";
import {actions, FilterType, requestUsers, follow, unfollow,} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage, getIsFetching,
    getIsFollowingProgress,
    getPageSize,
    getPortionSize,
    getTotalUsersCount,
    getUsersFilter,
    getUsersSuperSelector,
} from "../../redux/users-selectors";
import Preloader from "../Common/Preloader/Preloader";

const {setCurrentPage} = actions

type UsersType = {}

export const UsersPage: React.FC<UsersType> = () => {
    const dispatch = useDispatch();
    const pageSize = useSelector(getPageSize);
    const users = useSelector(getUsersSuperSelector);
    const currentPage = useSelector(getCurrentPage);
    const portionSize = useSelector(getPortionSize);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const followingInProgress = useSelector(getIsFollowingProgress);
    const filter = useSelector(getUsersFilter);
    const isFetching = useSelector(getIsFetching);

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, [])

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }

    const handleFollow = (id: number) => {
        dispatch(follow(id));
    }

    const handleUnfollow = (id: number) => {
        dispatch(unfollow(id));
    }


    return (
        <>
            {isFetching ? <Preloader/> : null}
            <div>
                <UsersFormikSearchForm onFilterChanged={onFilterChanged}/>
                <Paginator currentPage={currentPage}
                           totalItemsCount={totalUsersCount}
                           pageSize={pageSize}
                           onPageChanged={onPageChanged}
                           portionSize={portionSize}/>
                {
                    users.map(u => <div key={u.id}>
                        <div className={s.wrapper}>
                            <div className={s.userItem}>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className={s.avatar} src={u.photos.small ? u.photos.small : unknownUser}
                                             alt="avatar"/>
                                    </NavLink>
                                    {u.followed
                                        ?
                                        <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                            handleUnfollow(u.id)
                                        }} className={s.followBtn}>Unfollow</button>
                                        :
                                        <button disabled={followingInProgress.some(id => id === u.id)} onClick={() => {
                                            handleFollow(u.id)
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
        </>
    )
};