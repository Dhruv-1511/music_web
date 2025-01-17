import React from 'react'
import { FaHeart } from "react-icons/fa";


import './song-list-card.css'

const SongListCard = ({
    id, 
    imgUrl, 
    songTitle, 
    artistName, 
    releaseDate, 
    handleSelect,
    album, 
    time, 
    handleAdd, 
    liked
}) => {

    return (
        <tr className='song-detail' onClick={() => handleSelect(id)}>
            <td className='song-no'>#{id}</td>
            <td>
                <div className='song-name'>
                    <div className='song-img'>
                        <img src={imgUrl} alt='' />
                    </div>
                    <div className='song-artist-name'>
                        <p className='song-artist-name1'>{songTitle}</p>
                        <p className='song-artist-name2'>{artistName}</p>
                    </div>
                </div>
            </td>
            <td>{releaseDate}</td>
            <td className='table-album'>{album}</td>
            <td >
                <div className='song-like'>
                    <FaHeart 
                        onClick={(e) => handleAdd(e, id)} 
                        className='heart' 
                        style={liked[id] ? {color: 'var(--bluecolor)' } : ""} 
                    />
                    <p>{time}</p>
                </div>
            </td>
        </tr>
    )
}

export default SongListCard