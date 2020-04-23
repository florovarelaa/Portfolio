import React, { Component } from 'react';
import './About.css'
import Banner from '../components/Banner/Banner.js'

class About extends Component {
    render () {
        return(
            <Banner>
                    <p className="about-banner-text">Hello, my name is <span className="about-name">Florencio Varela</span></p>
                    <p className="about-banner-text">I'm a <span>Full Stack Developer</span> and <span> Informatic Engineer</span></p>
                    <p className="about-banner-text">In the course of my career I developed different <span>skills</span> such as:</p>
                    <ul className="about-banner-text">
                        <li><span>Problem-Solving</span> Skills</li>
                        <li><span>Analytical Thinking</span></li>
                        <li>Producing <span>clean</span>, efficient <span>code</span> based on specifications</li>
                        <li><span>Testing</span> and <span>Deploying</span> programs and systems</li>
                    </ul>
                    <p className="about-banner-text">Passion and commitment for <span>Team Work</span> and the full <span>Software Development Life Cycle</span> Plan, Analyze, Design, Implement, Maintain.</p>
                    <p className="about-banner-text">Always trying to put into practice Agile Methodologies, especially <span>SCRUM</span>.</p>
                    <p className="about-banner-text">In my opinion, <span>Continual Improvement</span>, Is a Must</p>
                    <p className="about-banner-text">I also enjoy designing and <span>building games</span> on my <span>Free Time</span></p>
            </Banner>
        )
    }
}

export default About;