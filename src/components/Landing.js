import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";


class Landing extends Component {

    componentDidMount() {
        document.getElementById('navbar').style.display = "none";
    }

    componentWillUnmount(){
        document.getElementById('navbar').style.display = "flex";
    }

    render() {
        return (
            <div className="container d-flex justify-content-center h-100">
                <div className="row align-self-center">
                    <div className="col-12 text-center flex-wrap">
                        <h1 className="text-uppercase welcome-fade-in">Welcome to my website</h1>
                        <h2 className="welcome-name-in">My name is Adam Foot</h2>
                        <h3 className="welcome-text-in">A Front-End Developer from Stroud</h3>
                        <Link to={ROUTES.HOME} className="text-decoration-none text-black align-self-end"><h4 className="welcome-text-explore">Explore >>></h4></Link>
                    </div>
                </div>
            </div>
        );
    }

}

export default Landing;