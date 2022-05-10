import React from 'react';
import logo from './logo.svg';
import './App.css';

import LightBoxComponent from './LightBoxComponent';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import Dog1 from './imgs/Dog1.jpeg';
import Dog2 from './imgs/Dog2.jpeg';
import Dog3 from './imgs/Dog3.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LightBoxComponent url={Dog1} />

        <LightBoxComponent url={Dog2} />

        <LightBoxComponent url={Dog3} />
      </header>
    </div>
  );
}

export default App;
