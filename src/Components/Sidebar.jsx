import React from 'react';
import '../Styles/Sidebar.css';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../Context/DataLayer';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className='sidebar'>
      <img 
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
        alt=""
        className='sidebar__logo'
      />

      <SidebarOptions Icon={<HomeIcon />} option="Home" />
      <SidebarOptions Icon={<SearchIcon />} option="Search" />
      <SidebarOptions Icon={<LibraryMusicIcon />} option="Your Library" />

      <br />
      <strong className='sidebar__title'>PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map(playlists => (
        <SidebarOptions option={playlists.name}/>
      ))}
    </div>
  )
}

export default Sidebar;