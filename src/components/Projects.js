import React from "react";

import colourmail from '../assets/projects/cm.svg';
import slw from '../assets/projects/slw.svg';
import aftts from '../assets/projects/aftts.svg';
import gr from '../assets/projects/gamereview.svg';
import wzstats from '../assets/projects/wzstats.svg';

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
                        web projects! Clicking the projects image will re-direct you to it's hosted website.</p>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className="col-8 col-md-6 col-lg-4 text-center mb-4">
                        <div className="card h-100 border-success p-3">
                            <a href="https://shannonleahwatson.co.uk/" target="_blank" rel="noreferrer"><img src={slw} className="card-img-top w-75 ml-auto mr-auto social-links" alt="Shannon Leah Watson" /></a>
                                <div className="card-body">
                                    <h5 className="card-title font-weight-bolder">Shannon Leah Watson</h5>
                                    <p className="card-text">A portfolio website created for an Artist called Shannon Watson. This website allows her to display her works and her experiences.</p>
                                </div>
                        </div>
                    </div>

                    <div className="col-8 col-md-6 col-lg-4 text-center mb-4">
                        <div className="card h-100 border-success p-3">
                            <a href="https://chrome.google.com/webstore/detail/colourmail/aaghgjfphjnnamaoadafmijgmgnnpglo" target="_blank" rel="noreferrer"><img src={colourmail} className="card-img-top w-75 ml-auto mr-auto social-links" alt="ColourMail Extension" /></a>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">ColourMail Google Chrome Extension</h5>
                                <p className="card-text">A Google Chrome extension that allows its users to change the background colour of the Outlook web client for better accessibility. It was made primarily to help out a fellow student who struggled to read emails due to the contrasting black and white colours.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-md-6 col-lg-4 text-center mb-4">
                        <div className="card h-100 border-success p-3">
                            <a href="https://aftts-91e86.web.app/" target="_blank" rel="noreferrer"><img src={aftts} className="card-img-top w-75 ml-auto mr-auto social-links" alt="Adam Foot's TTS" /></a>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">Adam Foot's Text-To-Speech</h5>
                                <p className="card-text">A simple text-to-speech web application that allows users to talk into a microphone and have the text displayed in front of them. This was created to help a student who struggled with typing and found other alternatives such as Microsoft Cortana to be unreliable.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-md-6 col-lg-4 text-center mb-4">
                        <div className="card h-100 border-success p-3">
                            <a href="https://gamesreview-6e2f4.web.app/" target="_blank" rel="noreferrer"><img src={gr} className="card-img-top w-75 ml-auto mr-auto social-links" alt="Games Review" /></a>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">Games Review</h5>
                                <p className="card-text">An Angular project that makes use of Firebase's Cloud Firestore database. It allows users to add a game of their liking and give it a rating out of 5. The game is then displayed in a table on the webpage along with its rating.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-8 col-md-6 col-lg-4 text-center mb-4">
                        <div className="card h-100 border-success p-3">
                            <a href="https://atn3-s-warzone-s.web.app/" target="_blank" rel="noreferrer"><img src={wzstats} className="card-img-top w-75 ml-auto mr-auto social-links" alt="ATN3's Warzone Stats" /></a>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bolder">ATN3's WZ Stats</h5>
                                <p className="card-text">A React application that was created to help me and my friends track our in-game stats for the popular game Call of Duty: Warzone. It uses an API to fetch and store relevant data into a Firestore database. The stats are then rendered from Firestore onto the page. I have a Google Cloud function setup to run every 30 minutes and update the data to its most recent. All data apart from the recent games is dynamically rendered from the database, making it easily scalable.</p>
                            </div>
                        </div>
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