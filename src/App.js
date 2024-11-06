import React from 'react';
import Navbar from './Components/NavBar/NavBar.js';
import Intro from './Components/Professional/Introduction/Intro.js';
import Edu from './Components/Professional/Education/Edu.js'
import './App.css';
import WorkExper from './Components/Professional/WorkExperiences/WorkExper.js';
import CommunityInv from './Components/Professional/CommunityInvolvement/CommunityInv.js'

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='main-content'>
        <Intro />
        <Edu />
        <WorkExper />
        <CommunityInv />
      </div>
    </div>
  );
}

export default App;
