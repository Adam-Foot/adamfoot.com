import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";

import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';

const Socials = () => (
    <div>

        <nav className="navbar navbar-expand-md navbar-light bg-light mb-5 sticky-top">
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
                        <Link to={ROUTES.SOCIAL} className="nav-link font-weight-bold active">Social Media</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container font-big">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">Social Media.</h1>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="text-muted">Below you will be able to find all my useful Social Media links. Connect
                        with me!</p>
                </div>
            </div>

            <div className="row justify-content-center mb-5">
                <div className="col-12 col-sm-6 col-lg-4 text-center mb-3">
                    <a href="https://twitter.com/AdamFoot03"><img src={twitter} className="img-fluid" alt="Twitter Logo" /></a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 text-center mb-3">
                    <a href="https://github.com/Adam-Foot"><img src={github} className="img-fluid" alt="Github Logo" /></a>
                </div>
                <div className="col-12 col-sm-6 col-lg-4 text-center mb-3">
                    <a href="https://www.linkedin.com/in/adamfoot/"><img src={linkedin} className="img-fluid" alt="LinkedIn Logo" /></a>
                </div>
            </div>

            <div className="row">
                <div className="col-12 text-center">
                    <p className="text-muted font-small">&#169; Copyright 2021 - Adam Foot</p>
                </div>
            </div>
        </div>
    </div>
)

export default Socials;