import React from 'react'
import './albums.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { musicData } from '../../db';
import SongListCard from '../songListCard/SongListCard';

const Albums = () => {
  return (
    <main className='dd'>
      <div className='Albums-container'>
        <section className='album-top-container'>
          <div className='album-top-left-container'>
            <div>
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
                id={list.id}
                imgUrl={list.artwork}
                songTitle={list.title}
                artistName={list.artist}
                releaseDate={list.releasedate}
                album={list.album}
                time={list.time} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Albums