import React from 'react'

const ArtistsAlbum = ({ imgUrl, alt, songTitle, year }) => {
    return (
        <div className='card-container'>
            <div>
                <div className='song-image-box'>
                    <img src={imgUrl} alt={alt} />
                </div>
                <p className='song-title'>{songTitle}</p>
            </div>
            <p className='artist-title'>{year}</p>
        </div>
    )
}

export default ArtistsAlbum
