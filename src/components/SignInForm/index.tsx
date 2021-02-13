import React from 'react';

export const SignInForm: React.FC = () => (
  <form className="App-main-form">
    <h1>Sign in</h1>
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="inputEmail">Email</label>
    <input type="email" id="inputEmail" placeholder="Email..." required />

    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="inputPassword">Password</label>
    <input
      type="password"
      id="inputPassword"
      placeholder="Password..."
      required
    />
    <button type="button">Sign in</button>
  </form>
);
