"use client"
import React from 'react'
import "../sx.css"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signup } from '../../auth';
import Link from 'next/link';

export default function Signup() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
          await signup(email, password);
          router.push('/');
        } catch (err) {
          setError(err.message);
        }
      };  


  return (
    <div>
    <nav>
      <a href="#">
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" />
      </a>
    </nav>
    <div className="form-wrapper">
      <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
        <div className="form-control">
          <input type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
          <label>Email or phone number</label>
        </div>
        <div className="form-control">
          <input  type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
          <label>Password</label>
        </div>
        <button type="submit">Sign up</button>
        <div className="form-help">
          <div className="remember-me">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <a href="#">Need help?</a>
        </div>
      </form>
      {error && <p>{error}</p>}
      <p>
        Already a User? <Link href="/Sign">Sign in</Link>
      </p>
      <small>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
        <a href="#">Learn more.</a>
      </small>
    </div>
  </div>
  )
}
