import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import AboutMe from './components/AboutMe';
import CV from './components/CV';
import Socials from "./components/Socials";

import * as ROUTES from './constants/routes';
import NavBar from "./components/Navbar";

const App = () => (
    <Router>
        <NavBar />

        <Route exact path={ROUTES.HOME} component={Home} />
        <Route exact path={ROUTES.ABOUT_ME} component={AboutMe} />
        <Route exact path={ROUTES.CV} component={CV} />
        <Route exact path={ROUTES.SOCIAL} component={Socials} />
    </Router>
)

export default App;