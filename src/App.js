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
          token='BQAJCmtjdc7GIEXoWgGiCGpZU1FEufzR5A9mRczo0wnA55S2W7CabXlxSvganmXLQ4nd_z8AKEO2pKvRObMrLjRvuvLVINgnNVkbEOqeklKOjxnULKvv_fCdRr0ifmpTGlwrJN3nddhuUsrkfmVs_TrzEusUCXqhW38LQ5vQWU7r_hZcT0K1oDopZsIS7nLOfkOKrHE-bK4A9SY'
          uris={['spotify:track:7pQSwujyYbzU35XZeXLpOc']}
          name='Ecoute Web Player'
        />
      </div>
    </Fragment>
  );
}

export default App;
