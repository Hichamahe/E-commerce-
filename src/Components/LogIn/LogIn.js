import React, { useState } from 'react'
import './logIn.css'
import { Link } from 'react-router-dom'
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';



function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('')
  const [validEmail, setvalidEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
 

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === '') {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }
    
    if (!isValidEmail(email)) {
      setvalidEmail('Please enter a valid email');
    }else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Please enter your password');
    } else {
      setPasswordError('');
    }

    if (email !== '' && password !== '') {
      // Perform form submission logic
      // ...
      // Reset input values and error messages
      setEmail('');
      setPassword('');
      setEmailError('');
      setPasswordError('');
    }
  };

  const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};


  const isValidEmail = (email) => {
    // Simple email validation using regex
    // You can customize it according to your needs
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
  };

  return (
    <div className='page'>
    <div className='content'>
 <div className='title'>
      <h3>Create New Account </h3>
      <h6>Already Registered? Log in Here</h6>
    </div>
    <div className='form-login'>
    <form onSubmit={handleSubmit}>
    <label>Email : </label>
    <input type='Email' placeholder='Entre your name' value={email} onChange={(e) => setEmail(e.target.value)}/>
    {emailError && <p style={{color:"red"}}>{emailError}</p>}
    {validEmail && <p style={{color:"red"}}>{validEmail}</p>}
    <label>Password : </label>
    <div className='show-passed'>
    <input  type={showPassword ? 'text' : 'password'} placeholder='Entre your name' onChange={(e) => setPassword(e.target.value)} />
    <span onClick={togglePasswordVisibility}>{showPassword ? <FaEye className='Eye-icon' /> : <FaEyeSlash className='EyeSlash-icon' />}</span> 
    </div>
    {passwordError && <p style={{color:"red"}}>{passwordError}</p>}
    <div className='remembered'>
    <input type='checkbox' />
    <label>Remember Me</label> 
    </div>
    <div className='lien'>
    <Link className='for-Pass'>Forget Password</Link>
    <Link className='sign-in'>Sign In</Link>
    </div>
    <button type='submit' className='login' >Log In</button>
    </form>
    </div>
    </div>

    </div>
    
  )
}

export default LogIn