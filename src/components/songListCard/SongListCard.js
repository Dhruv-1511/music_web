import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";


const SongListCard = ({id, imgUrl, songTitle, artistName, releaseDate, album, time}) => {

    const [like, setLike] = useState(false)

    return (
        <tr className='song-detail'>
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
            <td>{album}</td>
            <td >
                <div className='song-like'>
                    <CiHeart onClick={() => setLike(!like)} className='heart' style={like ? { backgroundColor: 'var(--bluecolor)' } : ""} />
                    <p>{time}</p>
                </div>
            </td>
        </tr>
    )
}

export default SongListCard