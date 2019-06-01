import React, { Component } from 'react';
import './ProjectCardTitle.css';

class ProjectCardTitle extends Component {
    render () {
        return (
            <div  className="title title-bottom title-center">
                {this.props.children}
            </div>
        );
    };
};

export default ProjectCardTitle;