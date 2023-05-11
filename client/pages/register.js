import React from 'react'

function Register() {
  return (
            <>
            <div className='RegisterBox'>
            <h2>Register</h2>
            <p>Fill Your Inforamtion</p>
            <div className='inputBox'>
               <form method='post'>
               <input  type='text' placeholder="Please enter your name" required></input>
                <input type='text'  placeholder="User name" required></input>
                <input type='email'  placeholder="E-mail Address" required></input>
                <input type='password'  placeholder="Password" required></input>
                <button className='btn'>Create Account</button>
               </form>
            </div>
            </div>
            </>
  )
}

export default Register;
