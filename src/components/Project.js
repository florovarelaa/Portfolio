import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl'
import './Project.css'

const Project = (props) => {
    return (
        <div className="project">
            <Card className="project-card" shadow={5}>
                <CardTitle className="project-card-title" style={{background: `url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover`}}>
                    {props.title}
                </CardTitle>
                <CardText>
                    {props.description}
                </CardText>
                <CardActions border>
                    <Button colored>
                        <a href={props.github} target="_blank" rel="noopener noreferrer">
                            github
                        </a>
                    </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name='share' />
                </CardMenu>
            </Card>
        </div>
    );
}

export default Project