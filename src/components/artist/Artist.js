import React, { useRef } from 'react'
import { musicData } from '../../db'
import LeftButtton from '../common/buttons/LeftButtton'
import RightButton from '../common/buttons/rightButton'
import './artist.css'

const Artist = () => {

    const ListRef3 = useRef(null);

    return (
        <div className='artist-container'>
            <p className='list-section-header'>Popular<span> Artists</span></p>

            <LeftButtton refs={ListRef3} />
            <div className='Geners-list ' ref={ListRef3}>
                {musicData.map(list => (
                    <div className='artists'>
                        <img src={list.artwork} alt='' />
                        <p>{list.title}</p>
                    </div>
                ))
                }
            </div>
            <RightButton refs={ListRef3} />

        </div>
    )
}

export default Artist