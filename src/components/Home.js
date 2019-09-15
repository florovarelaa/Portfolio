import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './Home.css';

class Home extends Component {
    render () {
        return(
            <div sytle={{width: '100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className="banner-text">
                            <h1>
                                <span className="font-podkova-script color444444">:): </span><span className="font-podkova-script font-letter-spacing-2 colorf0f0f0">However you Want</span>
                            </h1>
                            <h1>Florencio Varela</h1>
                            <div className="social-links"> 
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/florovarelaa/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/florovarelaa" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* Facebook */}
                                {/* <a href="https://www.facebook.com/florovarelaa" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a> */}
                                {/* Instagram */}
                                {/* <a href="https://www.instagram.com/florovarelaa" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a> */}
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;