import React, { useState } from 'react'
import './albums.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { musicData } from '../../db';
import SongListCard from '../songListCard/SongListCard';
import SecondNavbar from '../secondNavbar/SecondNavbar';

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

          <SecondNavbar />

          <div className='album-top-container'>
            <div className='album-top-left-container'>
              <div className='album-img'>
                <img src='albumsbg.svg' alt='' />
              </div>
              <div className='album-content'>
                <p className='list-section-header'>Trending songs <span>mix</span></p>
                <p className='trending-detail'>tate mcree, nightmares, the neighberhood, doja cat and ...</p>
                <div className='album-content-bottom-main'>
                  <div className='album-content-bottom'>
                    <p>20 songs</p>
                    <div className='album-bottom-dot' />
                    <p>1h 36m</p>
                  </div>

                  <div className='album-play-content'>
                    <div className='album-play'>
                      <p className='play-all'>Play All</p>
                      <FaRegCirclePlay className='play-btn' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <table className='album-table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Release Date</th>
              <th className='table-album'>Album</th>
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