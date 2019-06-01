import React, { Component } from 'react';
import './ProjectCardSlider.css';

class ProjectCardSlider extends Component {
    render() {
        return (
            <div className="slider">
                {this.props.children}
            </div>
        );
    };
};

export default ProjectCardSlider;