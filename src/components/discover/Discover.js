import React, { useRef } from 'react'
import './Discover.css'
import { musicData } from '../../db'
import GenreCard from '../genreCard/GenreCard'
import LeftButtton from '../common/buttons/LeftButtton'
import RightButton from '../common/buttons/rightButton'
import Artist from '../artist/Artist'
import MusicVideo from '../musicVideo/MusicVideo'
import NewRelease from '../newRelease/NewRelease'
import TopAlbums from '../topAlbums/TopAlbums'
import MoodPlaylist from '../moodPlaylist/MoodPlaylist'

const Discover = () => {

  const ListRef = useRef(null);


  return (
    <main className='dd'>
      <div className='Discover-container'>
        <p className='list-section-header'>Music<span> Genres</span></p>

        <div className='genres-list-box'>
          <LeftButtton refs={ListRef} />

          <div className='Geners-list' ref={ListRef}>
            {musicData.map(list => (
              <>
                <GenreCard
                  imgUrl={list.artwork}
                  alt={list.title}
                  songTitle={list.title}
                />
              </>
            ))
            }
          </div>
          <RightButton refs={ListRef} />
        </div>
        <MoodPlaylist />
        <Artist />
        <MusicVideo />
        <NewRelease />
        <TopAlbums />
      </div>
    </main>
  )
}

export default Discover