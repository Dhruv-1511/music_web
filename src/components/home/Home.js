import React, { useRef } from 'react'
import './home.css'
import { blueColor } from '../../assets/color'
import { musicData } from '../../db'
import SongCard from '../songCard/SongCard'
import Button from '../common/buttons/Button'
import LeftButtton from '../common/buttons/LeftButtton'
import RightButton from '../common/buttons/rightButton'
import NewRelease from '../newRelease/NewRelease'
import Artist from '../artist/Artist'
import MusicVideo from '../musicVideo/MusicVideo'
import TopAlbums from '../topAlbums/TopAlbums'
import MoodPlaylist from '../moodPlaylist/MoodPlaylist'
import SongListCard from '../songListCard/SongListCard'
import { FaPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom'


const Home = () => {

  const topSixSong = musicData.slice(0, 6)
  const ListRef1 = useRef(null);
  console.log('home');


  return (
    <main className='dd'>
      <div className='Home-container'>

        {/* All-The-Best-Song Section  */}
        <section className='Top-container'>
          <div className='contant-box'>
            <h1 className='top-header-text'>All the <span className='middle-text'> Best Songs </span> in One Place</h1>

            <p className='para-text'>On our website, you can access an amazing collection of popular and new songs. Stream your favorite tracks in high quality and enjoy without interruptions. Whatever your taste in music, we have it all for you!</p>

            <div className='buttons'>
              <Button
                title='Discover Now'
              />
              <Button
                title='Discover Now'
                bgColor={blueColor}
              />
            </div>
          </div>
        </section>

        {/* Weekly-Top-Songs Section */}
        <section className='second-container'>
          <p className='list-section-header'>Weekly Top <span>Songs</span></p>

          <div className='weekly-list-box'>
            {/* Left arrow button component */}
            <LeftButtton refs={ListRef1} />

            {/* SongCard Component */}
            <div className='Weekly-list' ref={ListRef1}>
              {musicData.map((list) => (
                <>
                  <SongCard
                    imgUrl={list.artwork}
                    alt={list.title}
                    songTitle={list.title}
                    artistName={list.artist}
                  />
                </>
              ))
              }
            </div>

            {/* Right arrow button component */}
            <RightButton refs={ListRef1} />
          </div>
        </section>

        <NewRelease />

        <section className='second-container'>
          <p className='list-section-header'>Trending <span>Songs</span></p>

          <div className='trending-song-table'>
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

                {topSixSong.map((list) => (
                  <>
                    <SongListCard
                      id={list.id}
                      imgUrl={list.artwork}
                      songTitle={list.title}
                      artistName={list.artist}
                      releaseDate={list.releasedate}
                      album={list.album}
                      time={list.time} />
                  </>
                ))}
              </tbody>

            </table>
            <NavLink to="/albums" className="notActive">
              <div className='view-all'>
                <FaPlus />
                <p>View All</p>
              </div>
            </NavLink>
          </div>
        </section>

        <Artist />
        <MusicVideo />
        <TopAlbums />
        <MoodPlaylist />
      </div>
    </main>
  )
}

export default Home