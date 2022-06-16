import '../styles/navigation.scss'
import logo from '../images/instalogo.png';
import search from '../images/searchlogo.png';
import React from 'react'
import Menu from './Menu.js'
function Navigation() {
  return (
    <div className="navigation">
        <div className="container">
            <img className="logo" src={logo} alt="insta logo" />
            <div className="search">
                <img className="searchIcon" src={search} alt="search Icon"></img>
                <span className="searchText">Search</span>            
            </div>
            <Menu/>
        </div>

    </div>
  )
}

export default Navigation