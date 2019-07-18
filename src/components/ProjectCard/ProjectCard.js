import React, { Component } from 'react';
import CardIcon from './CardIcon/CardIcon';
import ProjectCardSlider from './ProjectCardSlider/ProjectCardSlider';
import ProjectCardDescription from './ProjectCardDescription/ProjectCardDescription';
import ProjectCardTitle from './ProjectCardTitle/ProjectCardTitle';
import './ProjectCard.css';

class ProjectCard extends Component {        
    render() {
        return(
            <div className="project-card project-card-medium">
                <a href={this.props.repository} target="_blank" rel="noopener noreferrer">
                    <ProjectCardSlider>
                        <CardIcon icon={this.props.icon}/> 
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