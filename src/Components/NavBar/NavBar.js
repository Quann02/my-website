import React from 'react';
import './NavBar.css';
import '.././Background/Background.css'

function Navbar() {
  function ScrollUp() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div className='navbar'>
      <div>
        <div className='navbar_title'>
          <h1 className='navbar_title_name'>Phu Quan</h1>
          <h1 className='navbar_title_position'>Informatics Student</h1>
        </div>
        <nav className='navbar_links'>
          <div>
            <a href='/Professional' onClick={ScrollUp}>Professional</a>
          </div>
          <div className='navbar_pages'>
            <a href='https://drive.google.com/file/d/1-FJsVOJ1DOJmTQDS9zyCMHPAH3-yxbg6/view?usp=sharing' target="_blank" rel='noreferrer'>Resume</a>
            <a href='https://www.linkedin.com/in/phu-quan/' target="_blank" rel='noreferrer'>LinkedIn</a>
            <a href='https://github.com/Quann02' target="_blank" rel='noreferrer'>GitHub</a>
            <a href='#contact'>Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
