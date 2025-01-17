import React from 'react'

const ArtistPlaylist = ({ imgUrl, alt, songTitle }) => {
    return (
        <div className='playlist-container'>
            <div className='playlist-card-container'>
                <div className='playlist-song-image-box'>
                    <img src={imgUrl} alt={alt} />
                </div>
                <p className='playlist-title'>{songTitle}</p>
            </div>
            <p className='playlist-name'>{songTitle}</p>
        </div>
  )
}

export default ArtistPlaylist