import React from 'react';
import '../styles/navbar.css';
import { changeTab } from '../redux/actions';
import { connect } from 'react-redux';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navElement" onClick={()=>props.changeTab('home')}>
          Home
      </div>
      <div className="navElement" onClick={()=>props.changeTab('settings')}>
          Settings
      </div>
      <div className="navElement" onClick={()=>props.changeTab('profile')}>
          Profile
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentTab: state.currentTab
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeTab: (element) => dispatch(changeTab(element))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
