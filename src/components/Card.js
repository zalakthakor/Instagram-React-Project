import React from 'react'
import '../styles/card.scss';
import Profile from './Profile';
import {ReactComponent as CardBtn} from '../images/CardBtn.svg';
import CardMenu from './CardMenu';
import Comment from './Comment';
import users from '../data/users';
function Card(props) {
    const{
        storyBorder,
        image,
        comments,
        likedByText,
        likedByNumber,
        hours
    } =props;   

    let accountName=users[Math.floor(Math.random()*users.length)].username;
    console.log(accountName);

    return (
    <div className="card">
        <header>
            <Profile iconSize="medium" storyBorder={storyBorder}/>
            <span className="accountName">{accountName}</span>
            <CardBtn className="cardbtn"/>
            
        </header>
        <img className="cardImage" src={image} alt="card content"/>
        <CardMenu/>
        <div className="likedBy">
            <Profile iconSize="small" hideAccountName={true}/>
            <span>
                Liked by <strong>{likedByText}</strong> and{" "}
                <strong>{likedByNumber} others</strong>
            </span>
        </div>
        
        {/* <div className="comments">
        {comments.map((commentsOne) => {
          return (
            <Comment
              key={commentsOne.id}
              accountName={commentsOne.user}
              comment={commentsOne.text}
            />
          );
        })}
      </div> */}

      <div className="comments">
          {comments?.map((comment) =>{
            return (
                <Comment key={comment.id} accountName={comment.user} comment={comment.text}/>
            )
          })}
      </div>
        <div className="timePosted">
            {hours} HOURS AGO
        </div>
        <div className="addComment">
            <div className="commentText">
                Add a comment...
            </div>
            <div className="postText">
                POST
            </div>
        </div>
    </div>
  )
}

export default Card