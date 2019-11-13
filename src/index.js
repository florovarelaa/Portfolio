import React from 'react';
import ReactDOM from 'react-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import './index.css';
import App from './App';
import Particles from 'react-particles-js';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import blurReducer from './reducers/blurReducer';
import itemReducer from './reducers/itemReducer';
import { Provider } from 'react-redux';
import LazyImage from './components/LazyImage/LazyImage.js';
const backgroundImage = require('./assets/background_0.jpg')

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
};

const allReducers = combineReducers({
  blur: blurReducer,
  item: itemReducer,
})

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
            //Provides the store of the rest of the app. The store contains the state.
            <Provider store={store}>
              <BrowserRouter>
              <div>
                  <LazyImage src={backgroundImage}/>
                  <Particles className="particles" params={particlesOptions} />
                  <App />
              </div>
              </BrowserRouter>
            </Provider>
            , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
