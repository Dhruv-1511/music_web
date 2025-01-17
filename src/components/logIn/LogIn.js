import React from 'react'
import Button from '../common/buttons/Button'
import { RiLockPasswordFill } from 'react-icons/ri'
import { blueColor } from '../../assets/color'

const LogIn = () => {
  return (
    <div className='login-inputs'>
                <div className='login-inputs1'>
                  <div className='lable-box'>
                    <p>E-Mail</p>
                    <div className='inputs'>
                      <img src='email.svg' alt='' />
                      <input type='text' placeholder='Enter Your Email'  />
                    </div>
                  </div>
                </div>
                <div className='login-inputs1'>
                  <div className='lable-box'>
                    <p>Password</p>
                    <div className='inputs'>
                      <RiLockPasswordFill style={{fontSize: '20px'}} />
                      <input type='password' placeholder='Enter Your Password'  />  
                    </div>
                  </div>
                </div>
                <Button title="Sign In" bgColor={blueColor}/>
              </div>
  )
}

export default LogIn