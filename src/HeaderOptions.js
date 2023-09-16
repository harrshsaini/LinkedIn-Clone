import React from 'react';
import {useSelector} from "react-redux";
import './HeaderOption.css';
import { Avatar } from '@mui/material';
import { selectuser } from './features/userSlice';
function HeaderOptions({avatar, Icon, title, onClick}) {
  const user = useSelector(selectuser);

  return (
    <div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon" />}
       {avatar && ( <Avatar className="headerOptions__icon" >{user?.email[0]}</Avatar>)}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  );
}

export default HeaderOptions;