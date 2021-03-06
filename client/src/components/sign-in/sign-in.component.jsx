import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../cutsom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = credentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(emailSignInStart({ email, password }));
  }

  const handleChange = (e) => {
    const { value, name } = e.target
    setCredentials({
      ...credentials,
      [name]: value
    })
  }

  const signInWithGoogle = () => dispatch(googleSignInStart());

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput label='email' name='email' type='email' value={credentials.email} handleChange={handleChange} required />
        
        <FormInput label='password' name='password' type='password' value={credentials.password} handleChange={handleChange} required />
        
        <div className="buttons">
        <CustomButton type="submit">Sign in</CustomButton>
        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;
