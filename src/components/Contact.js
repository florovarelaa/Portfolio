import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import './Contact.css';

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    {/* Left Side */}
                    <Cell className="contact-left" col={6}>
                        <h2>Florencio Varela</h2>
                        <img className="contact-img"
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                        />
                        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                        </p>
                    </Cell>
                    {/* Right Side */}
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <List>
                            <ListItem>
                                <ListItemContent icon="person">Bryan Cranston</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="person">Aaron Paul</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="person">Bob Odenkirk</ListItemContent>
                            </ListItem>
                        </List>
                    </Cell> 
                </Grid>
            </div>
        )
    }
}

export default Contact;