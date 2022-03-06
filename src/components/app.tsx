import { h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import Profile from '../routes/profile';

const App = () => {
  let hello: number;

  hello = 3;

  return (
    <div id="app">
      <Header />
      <div>{hello}</div>
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="me" />
        <Profile path="/profile/:user" />
      </Router>
    </div>
  );
}

export default App;
