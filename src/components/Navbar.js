import React from 'react';
import {Link} from 'react-router-dom';

import * as ROUTES from '../constants/routes';

const NavBar = () => (
    <>
        <div className="alert alert-warning alert-dismissible fade show mb-0" role="alert">
            <strong>Hold up!</strong> This website is still in <u>development</u> so you may encounter some bugs. Sorry about that!
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <nav className="navbar navbar-expand-md navbar-light bg-light mb-5 sticky-top" id="navbar">
            <Link to={ROUTES.HOME} className="navbar-brand">Adam Foot</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={ROUTES.CV} className="nav-link font-weight-bold text-uppercase">CV</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ROUTES.PROJECTS} className="nav-link font-weight-bold text-uppercase">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ROUTES.SOCIAL} className="nav-link font-weight-bold text-uppercase">Social
                            Media</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
)

export default NavBar;