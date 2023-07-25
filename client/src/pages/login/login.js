import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link, redirect } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth'; 

export function Login() {
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

  
  const isLoggedIn = Auth.loggedIn();

  if (isLoggedIn) {
    return <redirect to="/landing" />;
  }

  return (
    <div>
      <h2>Please login or sign-up to access the free quote app!</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Please enter Username!"
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Please enter password!"
          />
        </div>
        <button type="submit" id="loginBtn">
          Login
        </button>
        <button type="button" id="signUpBtn">
          <Link to="/signup">Sign Up!</Link>
        </button>
      </form>
    </div>
  );
}


