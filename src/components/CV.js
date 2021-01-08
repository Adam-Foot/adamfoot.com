import React from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../constants/routes";

const CV = () => (
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
                        <Link to={ROUTES.CV} className="nav-link font-weight-bold active">CV</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={ROUTES.SOCIAL} className="nav-link font-weight-bold">Social Media</Link>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="container font-big">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-4">CV.</h1>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="text-muted">Below you will be able to find all my relevant educational and industry
                        experiences.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="font-weight-bold">Education</p>
                    <p className="font-weight-bolder mb-0">2020 | University of Plymouth</p>
                    <p className="font-weight-bolder">Computing BSc | Grade - 2:1</p>
                    <ul>
                        <li>Computer Immersive Introduction</li>
                        <li>Introduction to Object-oriented Programming</li>
                        <li>Principles of Infrastructure</li>
                        <li>Analysis and Design</li>
                        <li>Databases: Analysis, Design and Development</li>
                        <li>Social Network Design</li>
                        <li>Mobile Device Programming (Android)</li>
                        <li>Object-oriented programming</li>
                        <li>Secure Systems Architectures and Mechanisms</li>
                        <li>User-Centred Interface Design</li>
                        <li>Database Applications Development</li>
                        <li>Programming for Entertainment Systems</li>
                        <li>Distributed Application Development</li>
                        <li>Advanced Databases</li>
                        <li>Software Project Management (Agile)</li>
                        <li>Computing Project (AR Android Application)</li>
                    </ul>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="font-weight-bolder mb-0">2016 | Strode College</p>
                    <p className="font-weight-bolder">BTEC Level 3 National Extended Diploma in IT | Grade - DMM</p>
                    <ul>
                        <li>Received a Networking certificate from Cisco</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="font-weight-bold">Work Experience</p>
                    <p className="font-weight-bolder mb-0">2020 | British Telecom - Bristol, UK</p>
                    <p className="font-weight-bolder">Current Employment</p>
                    <ul>
                        <li>Set up vulnerability scanning on popular platforms used within the core IMS network</li>
                        <li>Worked on automating some PING tests on a 5G network offsite</li>
                        <li>Setup and maintained the remote handsets used for testing RAN frequencies</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="font-weight-bolder">2020 | Wilxite Ltd. - Stroud, UK</p>
                    <ul>
                        <li>Helped maintain a Content Management System for a major client</li>
                        <li>Developed an Android application for another major client from scratch. Front-end only.</li>
                    </ul>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="font-weight-bolder">2018 | British Telecom - Cardiff, UK</p>
                    <ul>
                        <li>Helped develop a Bootstrap library using BT branding</li>
                        <li>Added new Bootstrap library to the existing website making it more responsive</li>
                        <li>Setup and carried out automated visual regression tests on the website after changes had
                            been
                            made
                        </li>
                        <li>Supported offshore team with defect resolution - Front end web changes only</li>
                    </ul>
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-12 col-md-8 col-lg-7">
                    <p className="font-weight-bold">Other Certification</p>
                    <p className="font-weight-bolder">LinkedIn Learning</p>
                    <ul>
                        <li>2019 | Choosing an Ecommerce Platform for Developers</li>
                        <li>2019 | Learning Functional Programming with JavaScript ES6+</li>
                        <li>2019 | React: Managing Complex Interactions</li>
                        <li>2019 | Learning Git and Github</li>
                        <li>2018 | Web Development Foundations: Full Stack vs Front-End</li>
                        <li>2018 | Web Programming Fundamentals</li>
                    </ul>
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

export default CV;