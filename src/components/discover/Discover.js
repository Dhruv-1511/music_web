import React, { useRef } from 'react'
import './Discover.css'
import { musicData } from '../../db'
import GenreCard from '../genreCard/GenreCard'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Discover = () => {

  const ListRef = useRef(null);
  const ListRef2 = useRef(null);

  const handleScroll = (direction, refs) => {

      if(refs.current){
      const scrollPixel = refs.current.clientWidth;

      refs.current.scrollBy({
        left: direction === "right" ? scrollPixel : -scrollPixel
      });}

    
  }

  return (
    <main className='dd'>
      <div className='Home-container'>
        <p className='list-section-header'>Music<span> Genres</span></p>

        <div className='genres-list-box'>
          <div
            className='left-arrow'
            onClick={() => handleScroll('left', ListRef)}
          >
            <FaChevronLeft />
          </div>

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
          <div
            className='right-arrow'
            onClick={() => handleScroll('right', ListRef)}
          >
            <FaChevronRight />
          </div>
        </div>

        <div className='mood-playlist-container'>
          <p className='list-section-header'>Mood<span> Playlist</span></p>

          <div className='genres-list-box'>
          <div
            className='left-arrow'
            onClick={() => handleScroll('left', ListRef2)}
          >
            <FaChevronLeft />
          </div>

          <div className='Geners-list' ref={ListRef2}>
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
          <div
            className='right-arrow'
            onClick={() => handleScroll('right', ListRef2)}
          >
            <FaChevronRight />
          </div>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Discover