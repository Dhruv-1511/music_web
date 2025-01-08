import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='Footer-container'>
            <div className='footer'>
                <div className='about'>
                    <h2>About</h2>
                    <p>Melodies is a website that has been created for over 5 year’s now and it is one of the most famous music player website’s in the world. in this website you can listen and download songs for free. also of you want no limitation you can buy our premium pass’s.</p>
                </div>
                <div className='tables'>
                    <div className='table'>
                        <h2>Melodies</h2>
                        <div className='hr' />
                        <p>Songs</p>
                        <p>Radio</p>
                        <p>Podcast</p>
                    </div>
                    <div className='table'>
                        <h2>Access</h2>
                        <div className='hr' />
                        <p>Explor</p>
                        <p>Artists</p>
                        <p>Playlists</p>
                        <p>Albums</p>
                        <p>Trending</p>
                    </div>
                    <div className='table'>
                        <h2>About</h2>
                        <div className='hr' />
                        <p>Policy</p>
                        <p>Social Media</p>
                        <p>Support</p>
                    </div>
                </div>
                <div className='social_icons'>
                    <p className='logo'>Melodies</p>
                    <div className='social'>
                        <img src='facebook.png' alt='' />
                        <img src='instagram.png' alt='' />
                        <img src='twitter.png' alt='' />
                        <img src='call.png' alt='' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer