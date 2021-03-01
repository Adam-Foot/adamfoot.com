import React from "react";

import colourmail from '../assets/projects/cm.png';
import slw from '../assets/projects/slw.png';
import aftts from '../assets/projects/aftts.png';
import gr from '../assets/projects/gamereview.png';
import wzstats from '../assets/projects/wzstats.png';

const Projects = () => {
    return(
        <div>
            <div className="container font-big">
                <div className="row">
                    <div className="col-12">
                        <h1 className="display-4">Projects.</h1>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-md-8 col-lg-7">
                        <p className="text-muted">Below you will be able to find all my current and completed
                        web projects!</p>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                        <a href="https://shannonleahwatson.co.uk/"><img src={slw} className="img-fluid" alt="Shannon Leah Watson" /></a>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                        <a href="https://chrome.google.com/webstore/detail/colourmail/aaghgjfphjnnamaoadafmijgmgnnpglo"><img src={colourmail} className="img-fluid" alt="ColourMail" /></a>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                        <a href="https://aftts-91e86.web.app/"><img src={aftts} className="img-fluid" alt="Adam Foot's TTS" /></a>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                        <a href="https://gamesreview-6e2f4.web.app/"><img src={gr} className="img-fluid" alt="Games Review" /></a>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3 text-center mb-3">
                        <a href="https://atn3-s-warzone-s.web.app/"><img src={wzstats} className="img-fluid" alt="Games Review" /></a>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12 text-center">
                        <p className="text-muted font-small">&#169; Copyright 2021 - Adam Foot</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;