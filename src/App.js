import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/MainRouter'
import Navbar from './components/Navbar/Navbar.js'
import { Layout, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Blur from 'react-css-blur';
import { connect } from 'react-redux';
import { actionActiveItem } from './actions/itemActions';
import { blurOn, blurOff } from './actions/blurActions';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.items = ['Home', 'About', 'Projects', 'Contact'];
  }
  
  //handles the click of the navBar menu items.
  handleItemClick(index) {
    this.blurEffect(this.props.blur.blurTime)
    this.props.onActiveItem(index);
  }

  blurEffect = (miliseconds) => {
    this.props.onBlurOn()
    setTimeout(() => {
      this.props.onBlurOff()
    }, miliseconds);
  }
  
  render() {
    return (
        <Layout>
            <Navbar>
                  {/* maps the navBar items into the NavBar */}
                    {this.items.map((item, index) => 
                    <Link 
                      key={index}
                      className={`${this.props.activeItem === index ? 'active' : ''}`}
                      to={`${item.toLowerCase()}`}
                      onClick={this.handleItemClick.bind(this, index)}
                  >{item}
                    </Link>
                  )} 
          </Navbar>
          {/* Checks if the blur property is active in the state and acts accordingly */}
          <Blur radius={ this.props.blur.active ? `${this.props.blur.blurRadius}px` : '0' } transition={`${this.props.blur.blurTime}ms`}>
          <Content className="content">
              <MainRouter className="main"/>
          </Content>
          </Blur>
        </Layout>
    );
  }
}

const mapStateToProps = state => ({
  blur: state.blur,
  activeItem: state.item,
});

const mapActionsToProps = {
  onBlurOn: blurOn,
  onBlurOff: blurOff,
  onActiveItem: actionActiveItem,
}

export default connect(mapStateToProps, mapActionsToProps)(App);