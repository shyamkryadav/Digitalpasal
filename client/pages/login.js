import React from 'react'

function Login() {
  return (
    <>
            <div className='RegisterBox'>
            <h2>Login</h2>
            <div className='inputBox'>
               <form method='post'>
                <input type='text'  placeholder="User name" required></input>
                <input type='password'  placeholder="Password" required></input>

                <button className='btn'>Login</button>
               </form>
            </div>
            </div>
            </>
  )
}

export default Login
