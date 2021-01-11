import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const NavBar = () => (
    <nav className="navbar navbar-expand-md navbar-light bg-light mb-5 sticky-top" id="navbar">
        <Link to={ROUTES.HOME} className="navbar-brand">Adam Foot</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
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