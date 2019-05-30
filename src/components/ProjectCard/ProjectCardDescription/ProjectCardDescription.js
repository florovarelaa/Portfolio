import React, { Component } from 'react';

class ProjectCardDescription extends Component {
    render () {
        return (
            <span>
                {this.props.children}
            </span>
        );
    }
}

ProjectCardDescription.defaultProps = {
    children: 'Project Description', 
}

export default ProjectCardDescription;