import React from 'react';
import '../Styles/SidebarOptions.css';

const SidebarOptions = ({ option, Icon }) => {
  return (
    <div className='sidebarOptions'>
      <div className="sidebarOptions__icon">
        {Icon}
      </div>
      {Icon ? <h4>{option}</h4> : <p>{option}</p>}
    </div>
  )
}

export default SidebarOptions;