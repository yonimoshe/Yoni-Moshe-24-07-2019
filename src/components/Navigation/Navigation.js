import React from 'react';
import { NavLink } from 'react-router-dom';
import './Logo.css';

const navigation = () => (

        <nav className="navbar navbar-light bg-light justify-content-xs-center">
          <p className="Logo">LOGO</p>
            <ul className="p-0">
                <li style={{fontSize: '20px', margin: '10px', display: 'inline-block'}}>
                  <NavLink to="/" exact >Home</NavLink>
                </li>
                <li style={{fontSize: '20px', margin: '10px', display: 'inline-block'}}>
                  <NavLink to="/favorites" >Favorites</NavLink>
                </li>
            </ul>

        </nav>


);

export default navigation;
