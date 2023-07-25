import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { Link } from "react-router-dom"

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [login] = useMutation(LOGIN_MUTATION);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { username, password } });
      localStorage.setItem('token', data.login.token);
      window.location.reload();
    } catch (error) {
      console.error(error.message);
    }
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
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Please enter Username!'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Please enter password!'
          />
        </div>
        <button type="submit" id='loginBtn'>Login</button>
        <button type="submit" id='signUpBtn'>
          <Link to="/signup">Sign Up!</Link></button>
      </form>
    </div>
  );
};

// export default Login;
