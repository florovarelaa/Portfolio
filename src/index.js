import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import App from './App';
import Particles from 'react-particles-js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const particlesOptions = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true, 
          value_area: 200,
        },
      }
    }
  }

ReactDOM.render(
            <BrowserRouter>
            <div>
                <Particles className="particles" params={particlesOptions} />
                <App />
            </div>
            </BrowserRouter>
            , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
