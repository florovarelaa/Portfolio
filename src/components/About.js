import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render () {
        return(
            <div className="banner-text">
                    <p>Hello my name is <span className="about-name">Florencio Varela</span>.</p>
                    <p>I'm an <span>Informatic Engineering</span> student and <span>Web Developer</span> from Argentina.</p>
                    <p>I'm quietly confident, naturally curious, and perpetually improving my chops. I design and code beautifully simple things, and I <span>love what I do</span>.</p>
                    <p>I started my career as a QA tester.
                    This brought me the possibility to develop different <span>skills</span> such as:</p>
                    <ul>
                        <li>Problem-Solving Skills</li>
                        <li>Analytical Thinking</li>
                        <li>Attention to Detail</li>
                        <li>Experience with Agile Development Process</li>
                    </ul>
                    <p>After obtaining knowledge and experience as a member of the QA team I migrated to building things!</p>
                    <p>As a developer I enjoy building <span>Fast & Responsive</span> applications.</p>
                    
            </div>
        )
    }
}

export default About;