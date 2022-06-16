import '../styles/suggestions.scss';
import React from 'react'
import Profile from './Profile';

function Suggestions() {
  return (
    <div className="suggestions">
        <div className="titleContainer">
            <div className="title">
                Suggestions For You
            </div>
            <a href='/'>See All</a>
        </div>
        <Profile 
        caption ="Followed by Devanshi + 3 more" 
        urlText="Follow" 
        iconSize="medium" 
        captionSize="small" 
        storyBorder={true}/>

        <Profile 
        caption ="Followed by Nakum + 4 more" 
        urlText="Follow" 
        iconSize="medium" 
        captionSize="small" 
        storyBorder={true}/>

        <Profile 
        caption ="Followed by Love + 5 more" 
        urlText="Follow" 
        iconSize="medium" 
        captionSize="small" 
        storyBorder={true}/>

        <Profile 
        caption ="Followed by Shipra + 2 more" 
        urlText="Follow" 
        iconSize="medium" 
        captionSize="small" 
        storyBorder={true}/>

        <Profile 
        caption ="Followed by Shivam + 6 more" 
        urlText="Follow" 
        iconSize="medium" 
        captionSize="small" 
        storyBorder={true}/>

        <Profile 
        caption ="Followed by Banss + 7 more" 
        urlText="Follow" 
        iconSize="medium" 
        captionSize="small" 
        storyBorder={true}/>

        
    </div>
  )
}

export default Suggestions