import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className="intro">
      <div className="intro-content">
        <h1>Hello!</h1>
        <h2>
          I'm Phu Quan, a fourth year student at the University of Washington majoring in Informatics and minoring in Data Science. 
          I bring strong technical expertise in web development, cybersecurity, and data analytics, with hands-on experience in Python,
          JavaScript, R, and Postgres. In addition to my technical skills, I am highly adaptable, a strong communicator, and a team player, 
          with a proven ability to collaborate effectively and solve complex problems.
       </h2>
       <h2> I'm eager to bring my dedication and skills to this role, and I hope you'll consider giving me the 
        opportunity to prove my value. </h2>
      </div>
      <div className="scroll-down">
        <span className="scroll-text">Scroll Down</span>
        <span className="arrow">&#x2193;</span>
      </div>
    </div>
  );
}

export default Intro;
