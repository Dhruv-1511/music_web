import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <p className='logo'>Melodies</p>
      <div className='menu'>
        <p className='menu_name'>Menu</p>
        <div className='menu_icon'>
          <img src='home.png' alt='' />
          <p>Home</p>
        </div>
        <div className='menu_icon'>
          <img src='discover.png' alt='' />
          <p>Discover</p>
        </div>
        <div className='menu_icon'>
          <img src='albums.png' alt='' />
          <p>Albums</p>
        </div>
        <div className='menu_icon'>
          <img src='artists.png' alt='' />
          <p>Artists</p>
        </div>        
      </div>
      <div className='menu'>
        <p className='menu_name'>Library</p>
        <div className='menu_icon'>
          <img src='recent.png' alt='' />
          <p>Recently Added</p>
        </div>
        <div className='menu_icon'>
          <img src='most_played.png' alt='' />
          <p>Most Played</p>
        </div>       
      </div>
      <div className='menu'>
        <p className='menu_name'>Playlist and favorite</p>
        <div className='menu_icon'>
          <img src='heart.png' alt='' />
          <p>Your favorites</p>
        </div>
        <div className='menu_icon'>
          <img src='playlist.png' alt='' />
          <p>Your playlist</p>
        </div>       
        <div className='menu_icon'>
          <img src='add_playlist.png' alt='' />
          <p>Add playlist</p>
        </div>       
      </div>
      <div className='menu'>
        <p className='menu_name'>general</p>
        <div className='menu_icon'>
          <img src='setting.png' alt='' />
          <p>Setting</p>
        </div>
        <div className='menu_icon'>
          <img src='logout.png' alt='' />
          <p>Logout</p>
        </div>       
      </div>
    </div>
  )
}

export default Sidebar