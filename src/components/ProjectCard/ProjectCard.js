import React, { Component } from 'react';
import ProjectCardIcon from './ProjectCardIcon/ProjectCardIcon';
import ProjectCardSlider from './ProjectCardSlider/ProjectCardSlider';
import ProjectCardDescription from './ProjectCardDescription/ProjectCardDescription';
import ProjectCardTitle from './ProjectCardTitle/ProjectCardTitle';
import './ProjectCard.css';

class ProjectCard extends Component {        
    render() {
        return(
            <div className="project-card project-card-medium">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    <ProjectCardSlider>
                        <ProjectCardIcon icon={this.props.icon}/> 
                        <ProjectCardTitle  className="title title-bottom title-center">
                            {this.props.title}
                        </ProjectCardTitle>
                    </ProjectCardSlider>
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