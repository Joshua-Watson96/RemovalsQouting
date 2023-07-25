import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom"
import { LOGIN } from '../../utils/mutations';



function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Please login or sign-up to access the free quote app!</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleChange}
            placeholder='Please enter Username!'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handleChange}
            placeholder='Please enter password!'
          />
        </div>
        <button type="submit" id='loginBtn'>
          <Link to="/landing">Login</Link></button>
        <button type="submit" id='signUpBtn'>
          <Link to="/signup">Sign Up!</Link></button>
      </form>
    </div>
  );
};

export default Login;
