import React from 'react'
import './Discover.css'
import { musicData } from '../../db'
import GenreCard from '../genreCard/GenreCard'

const Discover = () => {
    return (
        <main className='dd'>
            <div className='Home-container'>
            <p className='list-section-header'>Music<span> Genres</span></p>
            </div>

            <div className='Geners-list'>
            { musicData.map(list => (
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
        </main>
    )
}

export default Discover