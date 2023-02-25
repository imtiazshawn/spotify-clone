import React from 'react';
import '../Styles/Footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import { Shuffle } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__left">
          <img
            className='footer__albumLogo'
            src="http://images.genius.com/b378778408db6cd6795f7a1fd32ffbdf.640x636x1.jpg"
            alt=""
          />
          <div className="footer__songInfo">
            <h4>Your Call</h4>
            <p>Secondhand Serenade</p>
          </div>
        </div>

        <div className="footer__center">
          <ShuffleIcon className='footer__green'/>
          <SkipPreviousIcon className='footer__icon'/>
          <PlayCircleFilledWhiteIcon
            fontSize="large"
            className='footer__icon'
          />
          <SkipNextIcon className='footer__icon'/>
          <RepeatIcon className='footer__green' />
        </div>

        <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer;