import React from 'react'
import './secondNavbar.css'
import { Link } from 'react-router-dom';

const SecondNavbar = () => {
    return (
        <div className='secondary-navbar'>
            <div
                className='leftArrowBox'
            >
                <img src="leftArrowIcon.svg" alt="leftArrow" />
            </div>

            <div className='secondary-navbar-links'>
                <Link to="/">Share</Link>
                <Link to="/">About</Link>
                <Link to="/">Premuim</Link>
                <Link to="/">
                    <img src="profileIcon.svg" alt="profile" />
                </Link>
            </div>
        </div>
    )
}

export default SecondNavbar