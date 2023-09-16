import { Avatar } from '@mui/material';
import React from 'react';
import "./Sidebar.css";
import { selectuser } from './features/userSlice';
import {useSelector} from "react-redux";
function Sidebar() {

    const user = useSelector(selectuser);
     const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
     );

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
            <img src='https://media-exp1.licdn.com/dms/image/C4E1BAQGhPJ5B732T_g/company-background_10000/0/1566246571404?e=2159024400&v=beta&t=4RPEDRRf5ShkzL99j__BR0Au5l25d0yNSMxEFMGQSoE' alt='' />
            <Avatar src={user.photoUrl} className='sidebar__avatar'>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
      </div>
      <div className='sidebar__stats'>
          <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className='sidebar__statNumber'>2,543</p>
          </div>
          <div className="sidebar__stat"> 
          <p>Views on post</p>
         <p className='sidebar__statNumber'>2,448</p>

          </div>
      </div>
      <div className='sidebar__bottom'>
         <p>Recent</p>
         {recentItem('reactjs')}
         {recentItem('softwarengineering')}
         {recentItem('programming')}
         {recentItem('design')}
         {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar;