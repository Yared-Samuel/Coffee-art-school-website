
import React from "react";
import "./signUp.css";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Form from "./Form";

const SignUP = async () => {
  // const session = await getServerSession(options);

  return (
    <div className="form-container">
      <Form  />
      {/* <pre>{JSON.stringify(session, null, 2)}</pre>
      console.log(session) */}
    </div>
  );
};

export default SignUP;
