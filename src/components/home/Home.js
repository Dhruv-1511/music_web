import React from 'react'
import './home.css'
import Button from '../buttons/Button'
import { blueColor } from '../../assets/color'
import { musicData } from '../../db'
import SongCard from '../songCard/SongCard'

const Home = () => {

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

            {/* Weeklt-list components */}
          <div className='Weeklt-list'>
            { musicData.map(list => (
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
        </section>
      </div>
    </main>
    )
}

export default Home