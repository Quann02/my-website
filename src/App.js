import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar.js';
import Intro from './Components/Professional/Introduction/Intro.js';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;