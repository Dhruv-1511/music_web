import React from 'react'
import Button from '../common/buttons/Button'
import { blueColor } from '../../assets/color'

const SignUp = () => {
  return (
    <div className='login-inputs'>
                <div className='login-inputs1'>
                  <div className='lable-box'>
                    <p>Name</p>
                    <div className='inputs'>
                      <img src='name.svg' alt='' />
                      <input type='text' placeholder='Enter Your Name' />
                    </div>
                  </div>
                  <div className='lable-box'>
                    <p>Number</p>
                    <div className='inputs'>
                      <img src='call.svg' alt='' />
                      <input type='text' placeholder='Enter Your Number' />
                    </div>
                  </div>
                </div>
                <div className='login-inputs1'>
                  <div className='lable-box'>
                    <p>E-Mail</p>
                    <div className='inputs'>
                      <img src='email.svg' alt='' />
                      <input type='text' placeholder='Enter Your Email' />
                    </div>
                  </div>
                </div>
                <Button title="Sign Up" bgColor={blueColor}/>
                <div className='or'>
                  <div className='hr-line' />
                  <p>Or</p>
                  <div className='hr-line' />
                </div>
                <button className='google-signup'>
                  <img src='google.svg' alt='' />
                  <p>Sign Up With Google</p>
                </button>
              </div>
  )
}

export default SignUp