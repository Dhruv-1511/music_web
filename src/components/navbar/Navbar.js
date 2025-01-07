import React from 'react'
import './navbar.css';
import Button from '../buttons/Button';
import { blueColor } from '../../assets/color';
import { NavLink } from 'react-router-dom';

function Navbar() {

    // go to login
    const handleClick = () => {

    }

  return (
    <nav className='Nav-container'>
        <div className='Nav-box'>
            <div className='serach-box'>
                <div className='search-box-img'>
                    <img src='search.png' alt="search" />
                </div>
                <input type="text" placeholder='Search For Musics, Artists, ...'/>
            </div>

            <NavLink to='/about'
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >About Us</NavLink>
            <NavLink to='/contact'
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >Contact</NavLink>
            <NavLink to='/premium'
                className={({ isActive }) =>
                    isActive ? "active" : ""
                }
            >Premium</NavLink>

            <div className='Button-box'>
                <Button
                    title='Login'    
                    handleClick={handleClick}
                />
                <Button
                    title='Login'    
                    handleClick={handleClick}
                    bgColor={blueColor}
                />

            </div>
        </div>
    </nav>
  )
}

export default Navbar