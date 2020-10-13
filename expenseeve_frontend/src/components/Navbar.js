import React from 'react';
import '../styles/navbar.css';
import {Nav } from "react-bootstrap";
import { changeTab } from '../redux/actions';
import { connect } from 'react-redux';

const axios = require('axios');
const url = 'http://localhost:4000';

const Navbar = (props) => {

  const changeTab = async (element) => {
    let response = await axios.get(url);
    console.log(response)
    props.changeTab(element);
  }

  return (
    <Nav className="flex-column">
    <Nav.Link onClick={()=>changeTab('home')}>Home</Nav.Link>
    <Nav.Link onClick={()=>changeTab('settings')}>Settings</Nav.Link>
    <Nav.Link onClick={()=>changeTab('profile')}>Profile</Nav.Link>
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
