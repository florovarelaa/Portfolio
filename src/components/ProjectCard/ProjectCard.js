import React, { Component } from 'react';
import ProjectCardIcon from './ProjectCardIcon/ProjectCardIcon';
import './ProjectCard.css';
import ProjectCardDescription from './ProjectCardDescription/ProjectCardDescription';

class ProjectCard extends Component {        
    render() {
        return(
            <div className="project-card project-card-medium">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <ProjectCardIcon icon={this.props.icon}/> 
                    <ProjectCardDescription>
                        {this.props.description}
                    </ProjectCardDescription>
                </a>
            </div>
        );
    };      
}

ProjectCard.defaultProps = {
    url: '/#',
}

export default ProjectCard;