import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../cutsom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCredentials({
      ...credentials,
      email: '',
      password: '',
    });
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label='email' name='email' type='email' value={credentials.email} handleChange={handleChange} required />
        
        <FormInput label='password' name='password' type='passowrd' value={credentials.password} handleChange={handleChange} required />
        
        <div className="buttons">
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;
