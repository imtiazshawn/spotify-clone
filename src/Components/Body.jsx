import React from 'react';
import '../Styles/Body.css';
import Header from './Header';
import { useDataLayerValue } from '../Context/DataLayer';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  
  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:4jgo3WmWr9ajldRbD1nWw3`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
      <Header spotify={spotify} />

      <div className='body__info'>
        {discover_weekly?.images?.length > 0 && (
          <img src={discover_weekly.images[0].url} alt='Discover Weekly' />
        )}
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
        </div>

      </div>

      {/* Songs */}
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon className='body__shuffle' onClick={playPlaylist} />
            <FavoriteIcon fontSize='large'/>
            <MoreHorizIcon />
          </div>
        </div>

        {/* List of tracks */}
        {discover_weekly?.tracks.items.map(item => (
          <SongRow playSong={playSong} track={item.track} />
        ))}

    </div>
  );
};

export default Body;
