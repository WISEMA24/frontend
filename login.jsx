// src/App.js

//import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, } from "react-router-dom";
import './App.css'

export default function App() {
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")
  const [displayname, setdisplayname] = useState("")
  const [registerpw, setregisterpw] = useState("")


  const login = () => {

    fetch("url/login", {
      method: 'POST',
      body: JSON.stringify({username, password})
    })
    
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }});
  }

  const registration = () => {
    fetch("url/registration", {
      method: 'POST',
      body: JSON.stringify({username, password, displayname, registerpw})
    })

    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }});
  }

  return (
    <Router>
      <div>
        <h1>Log In</h1>
        <nav>
         
          <button onClick={login}>Sign In</button>
            <input value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="Username"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>


        </nav>
        <Routes>
       
          
        </Routes>
      </div>



      <div>
        <h1>Register here</h1>
        <nav>

        <button onClick={registration}>Sign In</button>
            <input value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder="Username"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password"/>

            <input value={displayname} onChange={(e) => setdisplayname(e.target.value)} type="text" placeholder="displayname"/>
            <input value={registerpw} onChange={(e) => setregisterpw(e.target.value)} type="password" placeholder="registerpw"/>
        </nav>
      </div>
    </Router>
  );
}


