import React, { Component } from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';

const ReactProjects = () => {
    return(
        <div className="projects-grid">
            <ProjectCard url= 'https://github.com/florovarelaa/React-portfolio'
                            icon='react'
                            description='My own personal Portfolio'
            />
            <ProjectCard url='https://github.com/florovarelaa/React-RoboFriends'
                            icon='react'
                            description='App for filtering Card Components'
            />
        </div>
    )
}

export default ReactProjects;