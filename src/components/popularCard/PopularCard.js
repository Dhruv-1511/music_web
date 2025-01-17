import React from 'react'
import { FaHeart } from 'react-icons/fa'

const PopularCard = ({
    id, 
    imgUrl, 
    songTitle, 
    artistName, 
    releaseDate, 
    handleSelect,
    played, 
    time, 
    handleAdd, 
    liked
}) => {
  return (
    <tr className='song-detail' onClick={() => handleSelect(id)}>
                <td className='song-no' style={{background: "black"}}>{id}</td>
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
                <td className='table-album'>{releaseDate}</td>
                <td>{played}</td>
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

export default PopularCard