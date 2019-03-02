import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import './Contact.css';

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell className="contact-grid-cell">
                        <div className="contact-grid-title">
                            <h2>CONTACT</h2>
                        </div>
                        <hr />

                        {/* REACER CON UN CSS COPADO */}

                        <div className="contact-list">
                            <List>
                                <ListItem className="contact-list-item">
                                    <ListItemContent>
                                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-linkedin-square" aria-hidden="true" /> LinkedIn
                                    </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem className="contact-list-item">
                                    <ListItemContent>
                                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-github-square" aria-hidden="true" /> GitHub
                                    </a>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem className="contact-list-item">
                                    <ListItemContent>
                                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-facebook-square" aria-hidden="true" /> Facebook
                                    </a>    
                                    </ListItemContent>
                                </ListItem>
                                <ListItem className="contact-list-item">
                                    <ListItemContent>
                                    <a href="http://google.com" target="_blank" rel="noopener noreferrer">
                                        <i className="fa fa-instagram" aria-hidden="true" /> Instagram
                                    </a>    
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Contact;