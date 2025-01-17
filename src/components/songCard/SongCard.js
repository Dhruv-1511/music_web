import React from 'react'
import './song-card.css'

function SongCard({imgUrl, alt, songTitle, artistName}) {
  return (
    <div className='card-container'>   
        <div>
            <div className='song-image-box'>
                <img src={imgUrl} alt={alt} />
            </div>
            <p className='song-title'>{songTitle}</p>
        </div>
        <p className='artist-title'>{artistName}</p>
    </div>
  )
}

export default SongCard