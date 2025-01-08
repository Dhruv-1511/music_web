import React from 'react'

const GenreCard = ({ imgUrl, alt, songTitle }) => {
    return (
        <>
            <div className='generes-song-image-box'>
                <img src={imgUrl} alt={alt} />
            </div>
            <p className='genres-title'>{songTitle}</p>
        </>
    )
}

export default GenreCard