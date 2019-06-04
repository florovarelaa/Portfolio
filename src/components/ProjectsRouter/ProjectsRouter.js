import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReactProjects from '../Projects/ReactProjects/ReactProjects';
import JavascriptProjects from '../Projects/JavascriptProjects/JavascriptProjects';
import UnityProjects from '../Projects/UnityProjects/UnityProjects';

const ProjectsRouter = () => {
    return(
        <Switch >
            <Route exact path="./react" component={ReactProjects} />
            <Route path="./javascript" component={JavascriptProjects} />
            <Route path="./unity" component={UnityProjects} />
        </Switch>
    )
}

export default ProjectsRouter;