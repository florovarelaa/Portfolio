import React from 'react';
import './Banner.css';

const Banner = (props) => {
    return(
        <div className="banner w60 wCenter">
            {props.children}
        </div>
    );
}

export default Banner;