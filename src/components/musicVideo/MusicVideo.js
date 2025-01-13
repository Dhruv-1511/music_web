import React, { useRef } from 'react'
import LeftButtton from '../common/buttons/LeftButtton'
import RightButton from '../common/buttons/rightButton'
import { musicData } from '../../db'
import './music-video.css'

const MusicVideo = () => {

    const ListRef4 = useRef(null);

    return (
        <div className='music-container'>
            <p className='list-section-header'>Music<span> Video</span></p>

                <LeftButtton refs={ListRef4} />
                <div className='Geners-list' ref={ListRef4}>
                    {musicData.map(list => (
                        <div className='music-list'>
                            <div className='music-image'>
                                <img src={list.artwork} alt='' />
                            </div>
                            <p className='music-list-title'>{list.title}</p>
                            <div className='music-list-detail'>
                                <p>{list.artist}</p>
                                <p>{list.views}</p>
                            </div>
                        </div>
                    ))
                    }
                </div>
                <RightButton refs={ListRef4} />
            </div>
    )
}

export default MusicVideo