import React, { Component } from 'react';
import './ProjectCardIcon.css';

class ProjectCardIcon extends Component {

    getIcon(icon) {
        switch (icon) {
            case 'javascript':
                return (
                    <i className="fab fa-js-square" aria-hidden="true" />
                );
            case 'react': 
                return (
                    <i className="fab fa-react" aria-hidden="true" />
                );
            case 'unity':
                return (
                    <i className="fas fa-cube" aria-hidden="true" />
                );
            default:
                return (
                    <i className="fab fa-javascript" aria-hidden="true" /> 
                );
        }
    }

    render () {
        return(
            <div className="icon-center">
                {this.getIcon(this.props.icon)}
            </div>
        )
    }
}

ProjectCardIcon.defaultProps = {
    icon: 'javascript',
}

export default ProjectCardIcon;