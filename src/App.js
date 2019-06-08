import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/MainRouter'
import { Layout, Header, Navigation, Content } from 'react-mdl';
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
      <div className="content">
        <Layout>
          <Header className="header-color header-position" scroll>
            <div className="header-navigation-position">
                <Navigation className="header-navigation" 
                    onClick={ () => {
                      this.blurEffect(this.props.blur.blurTime);
                        }
                      }
                >
                  {/* maps the navBar items into the NavBar */}
                  { this.items.map((item, index) => 
                    <Link 
                      key={index}
                      className={`navigation-link ${this.props.activeItem === index ? 'navigation-link-selected' : ''}`}
                      to={`${item.toLowerCase()}`}
                      onClick={this.handleItemClick.bind(this, index)}
                  >{item}
                    </Link>
                  )}
                </Navigation>
            </div>
          </Header>
          {/* Checks if the blur property is active in the state and acts accordingly */}
          <Blur radius={ this.props.blur.active ? `${this.props.blur.blurRadius}px` : '0' } transition={`${this.props.blur.blurTime}ms`}>
          <Content>
              <MainRouter className="main"/>
          </Content>
          </Blur>
        </Layout>
      </div>
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