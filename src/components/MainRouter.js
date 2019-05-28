import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const MainRouter = () => {
    return(
        <Switch >
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
        </Switch>
    )
}

export default MainRouter;