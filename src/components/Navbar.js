import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const NavBar = () => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
        <Link to={ROUTES.HOME} className="navbar-brand">Adam Foot</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={ROUTES.HOME} className="nav-link font-weight-bold">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to={ROUTES.ABOUT_ME} className="nav-link font-weight-bold">About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to={ROUTES.CV} className="nav-link font-weight-bold">CV</Link>
                </li>
                <li className="nav-item">
                    <Link to={ROUTES.SOCIAL} className="nav-link font-weight-bold">Social Media</Link>
                </li>
            </ul>
        </div>
    </nav>
)

export default NavBar;