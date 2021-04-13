import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../img/logo.png';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <a className="brand" href="/">
                    <img src={Logo} alt="" />
                </a>
                <input type="checkbox" id="nav" className="hidden" />
                <label htmlFor="nav" className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="wrapper">
                    <ul className="menu">
                        <li className="menu-item">
                            <NavLink activeClassName="active" to="/" exact>
                                main page
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" to="/about">
                                about me
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" to="/projects">
                                projects
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink activeClassName="active" to="/contacts">
                                contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
