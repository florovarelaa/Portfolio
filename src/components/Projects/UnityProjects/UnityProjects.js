import React, { Component } from 'react';
import ProjectCard from '../../ProjectCard/ProjectCard';

const UnityProjects = () => {
    return(
        <div className="projects-grid">
        <ProjectCard url='https://github.com/florovarelaa/Unity-Hit-The-Targets'
                     icon='unity'
                     description='A top down shooting game'
        />
        <ProjectCard url='https://github.com/florovarelaa/Unity-UnfairPlatformer'
                     icon='unity'
                     description='A not simple nor fair platformer game'
        />
        <ProjectCard url='https://github.com/florovarelaa/Unity-Patrol-Animal-Zone'
                     icon='unity'
                     description='A small game with an abilty sistem'
        />
        <ProjectCard url='https://github.com/florovarelaa/Unity-Flappy-Bird'
                     icon='unity'
                     description='A flappy bird clone'
        />
    </div>
    )
}

export default UnityProjects;