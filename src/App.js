import React from 'react';
import Navbar from './Components/NavBar/NavBar.js';
import Intro from './Components/Professional/Introduction/Intro.js';
import Edu from './Components/Professional/Education/Edu.js'
import './App.css';
import WorkExper from './Components/Professional/WorkExperiences/WorkExper.js';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='main-content'>
        <Intro />
        <Edu />
        <WorkExper />
      </div>
    </div>
  );
}

export default App;
