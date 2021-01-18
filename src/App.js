import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './components/Home';
import Landing from "./components/Landing";
import CV from './components/CV';
import Socials from "./components/Socials";
import Projects from "./components/Projects";

import * as ROUTES from './constants/routes';
import NavBar from "./components/Navbar";

const App = () => {
        return (
            <Router>
                <NavBar />

                <Route exact path={ROUTES.LANDING} component={Landing} />
                <Route path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.CV} component={CV} />
                <Route path={ROUTES.SOCIAL} component={Socials} />
                <Route path={ROUTES.PROJECTS} component={Projects} />
            </Router>
        )
}

export default App;