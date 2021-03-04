import React from 'react';

import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import fcc from '../assets/freecodecamp.png';

const Socials = () => (
    <div>
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
                <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                    <a href="https://twitter.com/AdamFoot03" target="_blank" rel="noreferrer"><img src={twitter} className="img-fluid" alt="Twitter Logo" /></a>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                    <a href="https://github.com/Adam-Foot" target="_blank" rel="noreferrer"><img src={github} className="img-fluid" alt="Github Logo" /></a>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                    <a href="https://www.linkedin.com/in/adamfoot/" target="_blank" rel="noreferrer"><img src={linkedin} className="img-fluid" alt="LinkedIn Logo" /></a>
                </div>
                <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                    <a href="https://www.freecodecamp.org/adam-foot" target="_blank" rel="noreferrer"><img src={fcc} className="img-fluid" alt="freeCodeCamp Logo" /></a>
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