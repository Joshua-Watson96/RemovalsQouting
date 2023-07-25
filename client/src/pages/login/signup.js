import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from "react-router-dom"
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

export function Signup() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            
            onChange={handleChange}
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



