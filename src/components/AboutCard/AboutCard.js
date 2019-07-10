import React, { Component } from 'react';
import './AboutCard.css';

class AboutCard extends Component {      
    getIcon(icon) {
        switch (icon) {
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
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                );
        }
    }
    
    render() {
        return(
            <div className="about-card about-card-medium">
                <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                    {this.getIcon(this.props.icon)} <span>{this.props.description}</span>
                </a>
            </div>
        );
    };      
}

AboutCard.defaultProps = {
    url: '/#',
}

export default AboutCard;