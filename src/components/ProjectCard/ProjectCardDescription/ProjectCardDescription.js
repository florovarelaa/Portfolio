import React, { Component } from 'react';
import './ProjectCardDescription.css';

class ProjectCardDescription extends Component {
    render () {
        return (
            <div className="descripition-bottom">
                {this.props.children}
            </div>
        );
    }
}

ProjectCardDescription.defaultProps = {
    children: 'Project Description', 
}

export default ProjectCardDescription;