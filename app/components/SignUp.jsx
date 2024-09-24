import React from "react";
import "./signUp.css";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";


const SignUp = async () => {
  return (
    <div className="form-container">
      <form >
      <h3>Sign Up</h3>

      <label htmlFor="email">Email</label>
      <input type="email" placeholder="email" id="eamil" />

      <label htmlFor="password">Password</label>
      <input type="text" placeholder="Password" id="password" />
      <Link href="#" className="button-sign">
          Sign Up
        </Link>

      
      <div className="social">
        <button className="go">
          <FaGoogle /> sign up with Google
        </button>
      </div>
    </form>
    </div>
  );
};

export default SignUp;
