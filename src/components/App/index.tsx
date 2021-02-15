import React from 'react';
import './App.scss';
import { SignInForm } from '../SignInForm';
import Todo from '../Todo';

const App: React.FC = () => (
  <div className="App">
    <main className="">
      <Todo />
    </main>
  </div>
);

export default App;
