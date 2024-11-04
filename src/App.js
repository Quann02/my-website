import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/NavBar.js';
import Intro from './Components/Professional/Introduction/Intro.js';
import Edu from './Components/Professional/Education/Edu.js';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Intro />
      <Edu />
    </div>
  );
}

export default App;