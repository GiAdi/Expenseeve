import React from 'react';
import '../styles/canvas.css';
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';
import { connect } from 'react-redux';

const Canvas = (props) => {

    let currentTab;
    switch(props.currentTab) {
        case 'home':
            currentTab = <Home />
            break;
        case 'settings':
            currentTab = <Settings />
            break;
        case 'profile':
            currentTab = <Profile/>
            break;
        default:
            currentTab = <Home />
            break;
    }

  return (
    <div className="canvas">
        {currentTab}
    </div> 
  );
}

const mapStateToProps = state => {
  return {
    currentTab: state.currentTab
  }
}

export default connect(mapStateToProps)(Canvas);
