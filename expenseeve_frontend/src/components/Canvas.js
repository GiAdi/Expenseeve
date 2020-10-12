import React from 'react';
import '../styles/canvas.css';
import { Row } from 'react-bootstrap'
import Home from './Home';
import Settings from './Settings';
import Profile from './Profile';
import { connect } from 'react-redux';

const Canvas = (props) => {
    let currentTab;

    switch(props.currentTab) {
      case 'home':
        currentTab = <Home/>
        break;
      case 'settings':
        currentTab = <Settings/>
        break;
      case 'profile':
        currentTab = <Profile/>
        break;
    }

  return (
    <React.Fragment>
        {currentTab}
    </React.Fragment> 
  );
}

const mapStateToProps = state => {
  return {
    currentTab: state.currentTab
  }
}

export default connect(mapStateToProps)(Canvas);
