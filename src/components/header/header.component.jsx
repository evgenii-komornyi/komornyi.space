import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../img/logo.png';

const Header = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleMenu = () => {
        setCollapsed(!collapsed);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <a className="brand" href="/">
                    <img src={Logo} alt="" />
                </a>
                <input
                    type="checkbox"
                    id="nav"
                    className="hidden"
                    checked={collapsed}
                    onChange={toggleMenu}
                />
                <label htmlFor="nav" className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="wrapper">
                    <ul className="menu">
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                to="/"
                                exact
                                onClick={toggleMenu}
                            >
                                main page
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                to="/about"
                                onClick={toggleMenu}
                            >
                                about me
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                to="/projects"
                                onClick={toggleMenu}
                            >
                                projects
                            </NavLink>
                        </li>
                        <li className="menu-item">
                            <NavLink
                                activeClassName="active"
                                to="/contacts"
                                onClick={toggleMenu}
                            >
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
