import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { hashSync } from "bcryptjs";
import './Signup.css'
 
const Signup = () => {let { register, handleSubmit } = useForm();
let navigate = useNavigate();

let [error, setError] = useState("");

async function onUserRegister(userObj) {
  try {
    console.log(userObj);
    // Search for duplicate user
    let res1 = await axios.get(
      `http://localhost:4000/users?username=${userObj.username}`
    );
    let usersList = res1.data;

    if (usersList.length === 0) {
      if (userObj.username.length < 5) {
        setError("Username must contain at least 5 characters.");
      } else if (userObj.password.length < 8) {
        setError("Password must contain at least 8 characters.");
      } else {
        let hashedPassword = hashSync(userObj.password, 5);
        userObj.password = hashedPassword;
        let res = await axios.post("http://localhost:4000/users", userObj);
        if (res.status === 201) {
          navigate("/login");
        }
      }
    } else {
      setError("User already exists!");
    }
  } catch (err) {
    setError(err.message);
  }
  };
 
  return (
    <div className='homecard'>
    <div className="bgs">
        
      
        <form className="forms" onSubmit={handleSubmit(onUserRegister)}>
          {error.length !== 0 && <p className="errors">{error}</p>}
          <h1>Sign Up</h1>
          <div>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              {...register("username")}
              placeholder="Enter your Username"
              required
            />
          </div>
   
          <div>
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              required
            />
          </div>
   
          <div>
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className="form-control mb-4"
              placeholder="Enter your email"
              required
            />
          </div>
   
          <div>
            <label htmlFor="dob" className="form-label">
              Date of birth
            </label>
            <input
              type="date"
              {...register("dob")}
              className="form-control mb-4"
              placeholder="Username"
              required
            />
          </div>
   
          <button className="btns">Sign Up</button>
         
        </form>
     

    </div>
      </div>
  )
};
 
export default Signup;