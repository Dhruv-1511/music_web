import React, { useState, useRef } from 'react';
import './AudioPlayer.css';
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { TbPlayerSkipBackFilled } from "react-icons/tb";
import { TbPlayerSkipForwardFilled } from "react-icons/tb";

const AudioPlayer = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const togglePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleScrub = (event) => {
        const scrubTime = (event.target.value / 100) * duration;
        audioRef.current.currentTime = scrubTime;
        setCurrentTime(scrubTime);
    };

    return (
        <div className="audio-player">
            <img src="https://f4.bcbits.com/img/a3736661212_65"
                alt="Album cover"
                className="album-cover"
            />
            <div className='audio-container'>
                <div className='audio-top-container'>
                    <div className="track-info">
                        <h4>Guess I'll Never Know</h4>
                        <p>TrackTribe</p>
                    </div>
                    <div className="controls">
                        <button className='audio-btn' ><TbPlayerSkipBackFilled className='control' /></button>
                        <button className='audio-btn' onClick={togglePlayPause}>
                            {isPlaying ? <FaPause className='control' /> : <FaPlay className='control' />}
                        </button>
                        <button className='audio-btn' ><TbPlayerSkipForwardFilled className='control' /></button>
                    </div>
                </div>
                <input type="range" className="tracker"
                    value={(currentTime / duration) * 100 || 0}
                    onChange={handleScrub}
                />
                <audio ref={audioRef} src="https://audio.jukehost.co.uk/vTRYaTEbpaYRCxiWGgL2S91mnOuMKfLw"
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;
