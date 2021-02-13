import React from 'react';
import './App.scss';
import { SignInForm } from '../SignInForm';

const App: React.FC = () => {
  console.log('hop');
  return (
    <div className="App">
      <main className="App-main">
        <SignInForm />
      </main>
    </div>
  );
};

export default App;
