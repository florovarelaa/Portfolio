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
                    <ProjectCardSlider>
                        <div className="project-card-icons">
                            <a className="project-card-icon" href={this.props.url} target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-external-link-alt"></i>
                            </a>
                            <CardIcon className="project-card-icon" icon={this.props.icon}/> 
                            <a className="project-card-icon" href={this.props.repository} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                        <ProjectCardTitle  className="title title-bottom title-center">
                            {this.props.title}
                        </ProjectCardTitle>
                    </ProjectCardSlider>
                    <ProjectCardDescription>
                        {this.props.description}
                    </ProjectCardDescription>
            </div>
        );
    };      
}

ProjectCard.defaultProps = {
    url: '/#',
}

export default ProjectCard;