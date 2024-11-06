import React from 'react';
import Navbar from './Components/NavBar/NavBar.js';
import Intro from './Components/Professional/Introduction/Intro.js';
import Edu from './Components/Professional/Education/Edu.js';
import WorkExper from './Components/Professional/WorkExperiences/WorkExper.js';
import CommunityInv from './Components/Professional/CommunityInvolvement/CommunityInv.js';
import Contact from './Components/Contact/Contact.js';
import './App.css';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className='main-content'>
        <section id="professional-section">
          <Intro />
          <Edu />
          <WorkExper />
          <CommunityInv />
        </section>
        
        <section id="contact-section">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
