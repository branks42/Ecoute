import React, { Fragment } from "react";
import logo from "./images/ecoute.png";
import "./App.css";
import SpotifyPlayer from 'react-spotify-web-playback';

function App() {
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="logo" width="400" height='156' />
        </header>
        <SpotifyPlayer
          token=''
          uris={['spotify:track:7pQSwujyYbzU35XZeXLpOc']}
          name='Ecoute Web Player'
        />
      </div>
    </Fragment>
  );
}

export default App;
