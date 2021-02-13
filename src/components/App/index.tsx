import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <form>
          <h1>Sign in</h1>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="inputEmail">Email</label>
          <input type="email" id="inputEmail" placeholder="email..." required />

          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            placeholder="password..."
            required
          />
          <button type="button">Sign in</button>
        </form>
      </main>
    </div>
  );
}

export default App;
