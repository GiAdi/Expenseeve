import React from 'react';
import '../styles/navbar.css';
import {Nav } from "react-bootstrap";
import { changeTab } from '../redux/actions';
import { connect } from 'react-redux';

const Navbar = (props) => {


  return (
    <Nav className="flex-column">
    <Nav.Link onClick={()=>props.changeTab('home')}>Home</Nav.Link>
    <Nav.Link onClick={()=>props.changeTab('settings')}>Settings</Nav.Link>
    <Nav.Link onClick={()=>props.changeTab('profile')}>Profile</Nav.Link>
  </Nav>
  )
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
