import React from 'react';
import './home.css'
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <>
      <div className='container-fluid home-container' id='home'>
        <div className='container home-content'>
          <h1>Shree Daulat Overseas</h1>
          <h2>
          <Typewriter
          options={{
          strings: ['Sandstones', 'Marbles', 'Granites'],
          autoStart: true,
          loop: true,
          }}
          />
          </h2>
          <div className='home-buttons'>
              <button className='btn btn-work'>Work With Us</button>
          </div>
        </div>
      </div>  
    </>
  );
};

export default Home;