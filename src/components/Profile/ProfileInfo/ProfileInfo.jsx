import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src="https://cdn.tribloo.com/storage/app/media/_mediathumbs/tribloo-destinations-124-cropped-images-dive-norway-8-10-978-298-1526660074-9458e322565a645c2d96bdd300eba8b1.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}

export default ProfileInfo; 