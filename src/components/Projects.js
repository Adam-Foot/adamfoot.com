import React from "react";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

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