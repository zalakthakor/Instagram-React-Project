import React from 'react'
import "../styles/menu.scss"
import {ReactComponent as Home} from '../images/home.svg';
import {ReactComponent as Msg} from '../images/msg.svg';
import {ReactComponent as Explore} from '../images/explore.svg';
import {ReactComponent as Notification} from '../images/notification.svg';
import {ReactComponent as Post} from '../images/post.svg';
import ProfileIcon from './ProfileIcon';
import image from '../images/Cat.jpg';
function Menu() {
  return (
    <div className="menu">
        <Home className="icon"/>
        <Msg className="icon"/>
        <Explore className="icon"/>
        <Notification className="icon"/>
        <Post className="icon"/>
        <ProfileIcon iconSize="small" image={image}/>
    </div>

  )
}

export default Menu