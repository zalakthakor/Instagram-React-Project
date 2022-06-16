import React from 'react'
import '../styles/cardMenu.scss';
import {ReactComponent as BookMark} from '../images/bookmark.svg';
import {ReactComponent as Notification} from '../images/notification.svg';
import {ReactComponent as Comment} from '../images/comment.svg';
import {ReactComponent as Share} from '../images/share.svg';


function CardMenu() {
  return (
    <div className="cardMenu">
        <div className="interactions">
            <Notification className="icon"/>
            <Comment className="icon"/>
            <Share className="icon"/>
        </div>
        <BookMark className="icon"/>
    </div>
  )
}

export default CardMenu