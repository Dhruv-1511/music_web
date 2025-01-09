import React from 'react'
import './navbar.css';
import Button from '../buttons/Button';
import { blueColor } from '../../assets/color';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    // go to login
    const handleLogin = () => {
        navigate('/')
    }
    // go to 
    const handleSignUp = () => {
        navigate('/')
    }

  return (
    <>
        <nav className='Nav-container'>
            <div className='Nav-box'>

                <div className='menu-search'>
                    {/* Menu Icon */}
                    <div>
                        <img src="hamburger.svg" alt="menu" />
                    </div>

                    {/* Search Input */}
                    <div className='serach-box'>
                        <div className='search-box-img'>
                            <img src='search.png' alt="search" />
                        </div>
                        <input type="text" placeholder='Search For Musics, Artists, ...'/>
                    </div>
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
                        handleClick={handleLogin}
                    />
                    <Button
                        title='Sign Up'    
                        handleClick={handleSignUp}
                        bgColor={blueColor}
                    />

                </div>
            </div>
        </nav>

        <Outlet/>
    </>
  )
}

export default Navbar