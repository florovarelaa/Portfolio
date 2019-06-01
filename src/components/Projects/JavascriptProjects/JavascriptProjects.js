import React, { Component } from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';

const JavascriptProjects = () => {
    return(
        <div className="projects-grid">
                        <ProjectCard url='https://github.com/florovarelaa/JS-GasStations'
                                     icon='javascript'
                                     description='An application that shows the gas stations of a region in a map.'
                        />
        </div>
    )
}

export default JavascriptProjects;