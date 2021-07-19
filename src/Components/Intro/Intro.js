import React from 'react';
import zuriPic from '../../Images/zuri.JPG';
import './Intro.css';

const  Intro = () => {

    return (
      <div className="intro-container" id="home">
          <div className="header-container">
              <h1 className="text-intro">Hi! I am </h1>
              <h1 className="text-name">Zuri Cason</h1>
              <p className="text-description">I am a software engineer currently living in Austin, Texas.
            If you hire me, expect to get a dedicated and hard worker with a very creative mind.</p>
          </div>
          <div className="pic-container">
            <img src={zuriPic} alt="Profile" class="circle-border"/>
          </div>
      </div>
    );
}

export default Intro;