import React, { Component } from 'react';
import './ProjectCard.css';

class ProjectCard extends Component {        
    render() {
        return(
            <div className="project-card project-card-medium">
                <a href="https://www.linkedin.com/in/florovarelaa/" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square" aria-hidden="true" /> <span>Una descripcion de un projecto hecho en react. Que contiene dos oraciones.</span>
                </a>
            </div>
        );
    };      
}

export default ProjectCard;