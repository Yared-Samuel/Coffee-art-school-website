import Link from "next/link";
import "./signUp.css";
import { FaGoogle } from "react-icons/fa";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * Form component for signing up
 * @returns {React.ReactElement} A React element representing the Form component
 * @description This component renders a form for signing up
 * @example
 * <Form />
 */
/******  c6688068-46af-4160-b5d9-d3056da217b0  *******/
const Form = () => {
  return (
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
  );
};

export default Form;
