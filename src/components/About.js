import React, { Component } from 'react';
import './About.css'

class About extends Component {
    render () {
        return(
            <div className="banner-text">
                    <p>Hello my name is <span>Florencio Varela</span> I'm an Informatic Engineering student and Web Developer from Argentina.</p>
                    <p>I'm quietly confident, naturally curious, and perpetually improving my chops. I design and code beautifully simple things, and I love what I do.</p>
                    <p>I started my career as a QA tester.
                    This brought me the possibility to develop skills such as:</p>
                    <ul>
                        <li>Problem-Solving Skills</li>
                        <li>Analytical Thinking</li>
                        <li>Attention to Detail</li>
                        <li>Experience with Agile Development Process</li>
                    </ul>
                    <p>After obtaining knowledge and experience as a member of the QA team I migrated to building things!</p>
                    <p>As a developer I enjoy building fast and responsive applications.</p>
                    
            </div>
        )
    }
}

export default About;