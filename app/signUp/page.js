import React from 'react'
import styles from './sign.css'
import Image from 'next/image'
const SignUP = () => {
  return (
    <div className="form-container">
      <Image className="logo" alt="logo" src="/images/banner-img.png" width={500} height={500} />
    
    <form>
        <h3>Sign Up</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label for="email">Email</label>
        <input type="email" placeholder="email" id="eamil" />

        <button>Sign Up</button>
        <div class="social">
          <div class="go" disabled><i class="fab fa-google"></i>  Google</div>
          <div class="fb"><i class="fab fa-facebook"></i>  Facebook</div>
        </div>
    </form>
</div>
  )
}

export default SignUP