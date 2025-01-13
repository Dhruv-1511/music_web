import React, { useState } from 'react'
import './albums.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { musicData } from '../../db';
import SongListCard from '../songListCard/SongListCard';
import { Link } from 'react-router-dom';

const Albums = () => {

  const [liked, setLikeed] = useState({});
  
  const handleAdd = (e, ListId) => {
    e.stopPropagation()
    setLikeed(pre => ({
      ...pre,
      [ListId]: !pre[ListId]
    }))
  }

  const handleSelect = (id) => {
    console.log(id);
  }

  return (
    <main className='dd'>
      <div className='Albums-container'>
        <section className='main-albums'>

          <div className='secondary-navbar'>
            <div 
              className='leftArrowBox'
            >
              <img src="leftArrowIcon.svg" alt="leftArrow" />
            </div>

            <div className='secondary-navbar-links'>
              <Link to="/">Share</Link>
              <Link to="/">About</Link>
              <Link to="/">Premuim</Link>
              <Link to="/">
                <img src="profileIcon.svg" alt="profile" />
              </Link>
            </div>
          </div>
        
          <div className='album-top-container'>
            <div className='album-top-left-container'>
              <div className='album-img'>
                <img src='albumsbg.svg' alt='' />
              </div>
              <div className='album-content'>
                <p className='list-section-header'>Trending songs <span>mix</span></p>
                <p>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
                <div className='album-content-bottom'>
                  <p>20 songs</p>
                  <div className='album-bottom-dot' />
                  <p>1h 36m</p>
                </div>
              </div>
            </div>
            <div className='album-play-content'>
              <div className='album-play'>
                <p>Play All</p>
                <FaRegCirclePlay className='play-btn' />
              </div>
            </div>  
          </div>
        </section>

        <table >
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Release Date</th>
              <th>Album</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>

            {musicData.map((list) => (
              <SongListCard
                key={list.id}
                id={list.id}
                imgUrl={list.artwork}
                songTitle={list.title}
                artistName={list.artist}
                releaseDate={list.releasedate}
                album={list.album}
                time={list.time} 
                handleSelect={handleSelect}
                handleAdd={handleAdd}
                liked={liked}
              />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Albums