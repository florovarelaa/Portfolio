import React, { Component } from 'react';

class ProjectCardIcon extends Component {
    render () {
        switch (this.props.icon) {
            case 'react': 
                return (
                    <i className="fab fa-react" aria-hidden="true" />
                );
            case 'javascript':
                return (
                    <i className="fab fa-js-square" aria-hidden="true" />
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
}

ProjectCardIcon.defaultProps = {
    icon: 'javascript',
}

export default ProjectCardIcon;