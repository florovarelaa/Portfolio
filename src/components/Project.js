import React from 'react';
import { Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl'

const Project = (props) => {
    return (
        <div>
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', 
                background: `url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center/cover`}}>
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