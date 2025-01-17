import React, { useRef } from 'react'
import { musicData } from '../../db';
import LeftButtton from '../common/buttons/LeftButtton';
import RightButton from '../common/buttons/rightButton';
import PlaylistCard from '../playlistCard/PlaylistCard';

const MoodPlaylist = () => {

    const ListRef2 = useRef(null);

  return (
    <div className='mood-playlist-container'>
          <p className='list-section-header'>Mood<span> Playlist</span></p>

          <div className='genres-list-box'>
            <LeftButtton refs={ListRef2} />
            <div className='Geners-list' ref={ListRef2}>
              {musicData.map(list => (
                  <PlaylistCard
                    key={list.id}
                    imgUrl={list.artwork}
                    alt={list.title}
                    songTitle={list.title}
                  />
              ))
              }
            </div>
            <RightButton refs={ListRef2} />
          </div>
        </div>
  )
}

export default MoodPlaylist