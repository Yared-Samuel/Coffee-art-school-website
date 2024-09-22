'use client'
import React from 'react'
import styles from './sign.css'
import Image from 'next/image'
import { getServerSession } from 'next-auth'
import { options } from '../api/auth/[...nextauth]/options'

const SignUP = () => {
  const session = async () => await getServerSession(options)
  return (
    <div className="form-container">
      {/* <Image className="logo" alt="logo" src="/images/banner-img.png" width={500} height={500} /> */}
    
    <form>
        <h3>Sign Up</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="eamil" />

        <button>Sign Up</button>
        <div className="social">
          <div className="go" disabled><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
</div>
  )
}

export default SignUP