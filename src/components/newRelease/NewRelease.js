import React, { useRef } from 'react'
import SongCard from '../songCard/SongCard';
import { musicData } from '../../db';
import LeftButtton from '../common/buttons/LeftButtton';
import RightButton from '../common/buttons/rightButton';

const NewRelease = () => {

    const ListRef2 = useRef(null);

  return (
    <section className='second-container'>
          <p className='list-section-header'>New Release <span>Songs</span></p>

          <div className='weekly-list-box'>
            {/* Left arrow button component */}
            <LeftButtton refs={ListRef2}/>
          
            {/* SongCard Component */}
            <div className='Weekly-list' ref={ListRef2}>
              { musicData.map((list) => (
                  <SongCard
                    key={list.id}
                    imgUrl={list.artwork}
                    alt={list.title}
                    songTitle={list.title}
                    artistName={list.artist}
                  />
                ))
              }
            </div>

            {/* Right arrow button component */}
            <RightButton refs={ListRef2}/>
          </div>
        </section>
  )
}

export default NewRelease