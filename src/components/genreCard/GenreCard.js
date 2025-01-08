import React from 'react'
import './geners-card.css'

const GenreCard = ({ imgUrl, alt, songTitle }) => {
    return (
        <div className='genres-card-container'>
            <div className='genres-shadow'></div>
            <div className='genres-song-image-box'>
                <img src={imgUrl} alt={alt} />
            </div>
            <p className='genres-title'>{songTitle}</p>
        </div>
    )
}

export default GenreCard