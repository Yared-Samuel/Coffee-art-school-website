'use client'
import Link from "next/link"
import "./signUp.css";
import signUp from "../api/auth/signUp";
import { options } from "../api/auth/[...nextauth]/options";
import { FaGoogle } from "react-icons/fa";

const Form = ({session}) => {
  return (
    <form action={signUp}>
        <h3>Sign Up</h3>


        <label htmlFor="email">Email</label>
        <input type="email" placeholder="email" id="eamil" />

        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Password" id="password" />

        {session ? (
          <Link href="/api/auth/login?callbackUrl=/" className="button-sign">
            Login For feedback
          </Link>
        ) : (
          <Link href="/api/auth/signUp?callbackUrl=/" className="button-sign">
            Sign Up
          </Link>
        )}
        <div className="social">
          <button className="go">
            <FaGoogle /> sign up with Google
          </button>
          
        </div>
      </form>
  )
}

export default Form