import { useEffect } from "react";
import { getTokenFromResponse } from "./API/Spotify";
import "./App.css";
import Login from "./Components/Login";
import Player from "./Components/Player";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from './Context/DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // States
  const [{ user, token }, dispatch] = useDataLayerValue();

  // UseEffect Hook
  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      });
      spotify.getPlaylist("4jgo3WmWr9ajldRbD1nWw3").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
    
    console.log("MY TOKEN IS >>>", _token);
  }, [token, dispatch]);



  return <div className="App">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;