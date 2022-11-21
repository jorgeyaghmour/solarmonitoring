import React, { useState} from 'react';
import './navbar.css';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>

      <a className='logo' href='/'>
      <img src='/Valencia-Logo.png' alt='Valenica College'/>
      </a>

      <a className='heading'>
          <h1>Solar Monitor</h1>
      </a>

      <a className="menu-item" href="/Dashboard">
        Dashboard
      </a>

      <a className="menu-item" href="/Alerts">
        Alerts
      </a>

      <a className="menu-item" href="/Weather">
        Weather
      </a>

      <a className="menu-item" href="/Account">
        Account
      </a>

    </Menu>
  );
};
