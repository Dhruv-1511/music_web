import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = ({toggleSideBar, setToggleSideBar}) => {
  
  return (
    <>
      { 
        toggleSideBar && <div className='morphism' onClick={() => setToggleSideBar(false)}></div>}

      <div className={`sidebar ${toggleSideBar && 'show-sidebar'}`}>
        <p className='logo'>Melodies</p>
        <div className='menu'>
          <p className='menu_name'>Menu</p>
          <NavLink to="/"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='home.png' alt='' />
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink to="/discover"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }
          >
            <div className='menu_icon'>
              <img src='discover.png' alt='' />
              <p>Discover</p>
            </div>
          </NavLink>
          <NavLink to="/albums"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='albums.png' alt='' />
              <p>Albums</p>
            </div>
          </NavLink>
          <NavLink to="/artists"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='artists.png' alt='' />
              <p>Artists</p>
            </div>
          </NavLink>
        </div>
        <div className='menu'>
          <p className='menu_name'>Library</p>
          <NavLink to="/recentlyadded"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='recent.png' alt='' />
              <p>Recently Added</p>
            </div>
          </NavLink>
          <NavLink to="/mostplayed"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='most_played.png' alt='' />
              <p>Most Played</p>
            </div>
          </NavLink>
        </div>
        <div className='menu'>
          <p className='menu_name'>Playlist and favorite</p>
          <NavLink to="/favorites"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='heart.png' alt='' />
              <p>Your favorites</p>
            </div>
          </NavLink>
          <NavLink to="/yourplaylist"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='playlist.png' alt='' />
              <p>Your playlist</p>
            </div>
          </NavLink>
          <NavLink to="/addplaylist"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='add_playlist.png' alt='' />
              <p>Add playlist</p>
            </div>
          </NavLink>
        </div>
        <div className='menu'>
          <p className='menu_name'>general</p>
          <NavLink to="/setting"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='setting.png' alt='' />
              <p>Setting</p>
            </div>
          </NavLink>
          <NavLink to="/logout"
            className={({ isActive }) =>
              isActive ? "active" : "notActive"
            }>
            <div className='menu_icon'>
              <img src='logout.png' alt='' />
              <p>Logout</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Sidebar