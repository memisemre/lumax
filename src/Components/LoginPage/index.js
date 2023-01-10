import React, { useState } from 'react';
import LoginAnimation from '../LoginAnimation';
import Header from '../Header';
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Header checkUserLogin={"loggingIn"} />
      <div className='login-page-container'>
        <div className='container'>
          <h1>Hello Again</h1>

          <input
            type="email"
            placeholder="E-mail adress"
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password "
            onChange={e => setPassword(e.target.value)}
          />

          <input
            type="submit"
            value="Login"
            onClick={e => console.log(email, password)}
          />

          <h3>Don't have an account yet?</h3>
          <button onClick={e => window.location.href = '/signup'}>Sign Up</button>
        </div>
      </div>
    </>
  )
}
