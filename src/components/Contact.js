import React, { Component } from 'react';
import AboutCard from './AboutCard/AboutCard';
import './Contact.css';

class Contact extends Component {
    render () {
        return(
            <div className="grid">
                <AboutCard 
                    icon="linkedin" 
                    url="https://www.linkedin.com/in/florovarelaa/"
                    description="/florovarelaa"
                />
                <AboutCard 
                    icon="github" 
                    url="https://github.com/florovarelaa"
                    description="/florovarelaa"
                />
                <AboutCard 
                    icon="facebook" 
                    description="/florovarelaa"
                    url="https://www.facebook.com/florovarelaa"
                />
                <AboutCard 
                    icon="instagram" 
                    url="https://www.instagram.com/florovarelaa"
                    description="/florovarelaa"
                />
            </div>
        )
    }
}

export default Contact;