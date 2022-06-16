import '../styles/profile.scss';

import React from 'react'
import ProfileIcon from './ProfileIcon';
import users from '../data/users'
function Profile(props) {
    const{
        username,
        caption,
        urlText,
        captionSize,
        storyBorder,
        hideAccountName,
        
        image,
        iconSize
    } =props;

    // let accountName=username ?
    // username :users[Math.floor(Math.random()*users.length)].username

    let accountName=users[Math.floor(Math.random()*users.length)].username;
    console.log(accountName);

  return (
    <div className="profile">
        <ProfileIcon iconSize={iconSize} storyBorder={storyBorder} image={image}/>
        {(accountName && caption) && !hideAccountName &&(
            <div className="textContainer">
                <span className="accountName">{accountName}</span>
                <span className={`caption ${captionSize}`}>{caption}</span>
                </div>

        )}
        <a href='/'>{urlText}</a>
    </div>
  )
}

export default Profile