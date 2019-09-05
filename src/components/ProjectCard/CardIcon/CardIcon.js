import React, { Component } from 'react';
import './CardIcon.css';

class CardIcon extends Component {

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
            case 'linkedin':
                return (
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                );
            case 'github':
                return (
                    <i className="fa fa-github-square" aria-hidden="true" />
                );
            case 'facebook':
                return (
                    <i className="fa fa-facebook-square" aria-hidden="true" />
                );
            case 'instagram':
                return (
                    <i className="fa fa-instagram" aria-hidden="true" />
                );
            default:
                return (
                    <i className="fab fa-javascript" aria-hidden="true" /> 
                );
        }
    }

    render () {
        return(
            <div className="icon-color">
                {this.getIcon(this.props.icon)}
            </div>
        )
    }
}

CardIcon.defaultProps = {
    icon: 'javascript',
}

export default CardIcon;