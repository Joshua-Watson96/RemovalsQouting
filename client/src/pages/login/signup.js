import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { gql } from '@apollo/client';
import { Link } from "react-router-dom"
const SIGNUP_MUTATION = gql`
  mutation Signup($username: String!, $password: String!) {
    signup(username: $username, password: $password) {
      token
      user {
        id
        username
      }
    }
  }
`;

export const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [signup] = useMutation(SIGNUP_MUTATION);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup({ variables: { username, password } });
      localStorage.setItem('token', data.signup.token);
      window.location.reload(); 
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">
          <Link to="/">Sign Up!</Link></button>
          <button type='submit'>
            <Link to="/">Go back</Link>
          </button>
      </form>
    </div>
  );
};


