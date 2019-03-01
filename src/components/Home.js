import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';
import avatar from '../avatar.jpg'

class Home extends Component {
    render () {
        return(
            <div sytle={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                            src={avatar}
                            alt='avatar'
                            className='avatar-img'
                        />
                        <div className="banner-text">
                            <h1>Florencio Varela - Web Developer</h1>
                            <hr />
                            <p> HTML/CSS | JAVASCRIPT | BOOTSTRAP | REACT </p>
                            <div className="social-links"> 
                                {/* Linkedin */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Facebook */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>
                                {/* Instagram */}
                                <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;