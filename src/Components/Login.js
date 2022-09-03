import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [creds, setCreds] = useState({email: "", password: ""})

    let history = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: creds.email, password: creds.password}),
          });
          const json = await response.json()
          console.log(json)
          if (json.success){
            //save the token and redirect
            localStorage.setItem('token', json.authtoken)
            history("/")
          }
          else {
            alert("Invalid Creds")
          }
    }

    const onChange = (e)=>{
        setCreds({...creds, [e.target.name]: e.target.value})
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            value={creds.email}
            onChange={onChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={creds.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
