import React, { useRef, useState } from 'react';
import './artists.css';
import { musicData } from '../../db';
import PopularCard from '../popularCard/PopularCard';
import LeftButtton from '../common/buttons/LeftButtton';
import RightButton from '../common/buttons/rightButton';
import ArtistsAlbum from '../ArtistsAlbum';
import SingleSongs from '../SingleSongs';
import ArtistPlaylist from '../ArtistPlaylist';
import SecondNavbar from '../secondNavbar/SecondNavbar';

const Artists = () => {
    const [liked, setLiked] = useState({});
    const [showMore, setShowMore] = useState(false);

    const ListRef1 = useRef(null)
    const ListRef2 = useRef(null)
    const ListRef3 = useRef(null)
    const ListRef4 = useRef(null)

    const handleAdd = (e, ListId) => {
        e.stopPropagation();
        setLiked(pre => ({
            ...pre,
            [ListId]: !pre[ListId]
        }));
    };

    const handleSelect = (id) => {
        console.log(id);
    };

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const visibleData = showMore ? musicData : musicData.slice(0, 5);

    return (
        <main className='dd'>
            <div className='Artists-container'>
                {/* Popular Artists Image */}
                <div className='artist-top-container'>
                    <SecondNavbar />
                    <div className='artist-top-img'>
                        <img src='eminem.png' alt='' />
                    </div>
                    <p className='artists-name'>Eminem</p>
                </div>

                {/* Popular song list */}
                <section className='second-container'>
                    <p className='popular-section-header'>Popular</p>
                    <div className='trending-song-table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th className='table-album'>Release Date</th>
                                    <th>Played</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {visibleData.map((list) => (
                                    <PopularCard
                                        key={list.id}
                                        id={list.id}
                                        imgUrl={list.artwork}
                                        songTitle={list.title}
                                        artistName={list.artist}
                                        releaseDate={list.releasedate}
                                        played={list.played}
                                        time={list.time}
                                        handleAdd={handleAdd}
                                        handleSelect={handleSelect}
                                        liked={liked}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <p className='show-more' onClick={toggleShowMore}>
                            {showMore ? 'Show Less' : 'Show More'}
                        </p>
                    </div>
                </section>

                {/* Artist Album Section */}
                <section className='artists-second-container'>
                    <p className='list-section-header'>Artist's <span>Album</span></p>

                    <div className='weekly-list-box'>
                        <LeftButtton refs={ListRef1} />

                        {/* Artists Card Component */}
                        <div className='Weekly-list' ref={ListRef1}>
                            {musicData.map((list) => (
                                <ArtistsAlbum
                                    key={list.id}
                                    imgUrl={list.artwork}
                                    alt={list.title}
                                    songTitle={list.title}
                                    year={list.releasedate.slice(-4)}
                                />
                            ))
                            }
                        </div>

                        <RightButton refs={ListRef1} />
                    </div>
                </section>

                {/* Single Songs Section */}
                <section className='artists-second-container'>
                    <p className='list-section-header'>Single <span>Songs</span></p>
                    <div className='weekly-list-box'>
                        <LeftButtton refs={ListRef2} />
                        {/* Single SongCard Component */}
                        <div className='Weekly-list' ref={ListRef2}>
                            {musicData.map((list) => (
                                <SingleSongs
                                    key={list.id}
                                    imgUrl={list.artwork}
                                    alt={list.title}
                                    songTitle={list.title}
                                    year={list.releasedate.slice(-4)}
                                />
                            ))
                            }
                        </div>
                        <RightButton refs={ListRef2} />
                    </div>
                </section>

                {/* Artist Playlist Section */}
                <section className='artists-second-container'>
                    <p className='list-section-header'>Artist's<span> Playlist</span></p>
                    <div className='genres-list-box'>
                        <LeftButtton refs={ListRef3} />
                        <div className='Geners-list' ref={ListRef3}>
                            {musicData.map(list => (
                                <ArtistPlaylist
                                    key={list.id}
                                    imgUrl={list.artwork}
                                    alt={list.title}
                                    songTitle={list.title}
                                />
                            ))
                            }
                        </div>
                        <RightButton refs={ListRef3} />
                    </div>
                </section>

                {/* Artists Fans Also Listen To */}
                <div className='artist-fans-container'>
                    <p className='list-section-header'>Artists Fans<span> Also Listen To</span></p>
                    <LeftButtton refs={ListRef4} />
                    <div className='Geners-list ' ref={ListRef4}>
                        {musicData.map(list => (
                            <div className='artists-img' key={list.id}>
                                <img src={list.artwork} alt='' />
                                <p>{list.title}</p>
                            </div>
                        ))
                        }
                    </div>
                    <RightButton refs={ListRef4} />
                </div>

            </div>
        </main>
    );
};

export default Artists;
