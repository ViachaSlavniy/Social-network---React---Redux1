import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.login}>Login</div>
            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png"/>
        </header>
    )
}

export default Header;