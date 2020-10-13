import React from 'react';
import {  connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import TitleBar from './components/TitleBar';
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';
import { getExpenses, getSettings } from './redux/actions'
import './App.css';

const axios = require('axios');

class App extends React.Component {

  getExpenses = async () => {
    let response = await axios.get('http://localhost:4000/getExpenses');
    this.props.getExpenses(response.data);
  }

  getSettings = async () => {
    let response = await axios.get('http://localhost:4000/getSettings');
    this.props.getSettings(response.data[0])
  }

  componentDidMount() {
    this.getSettings();
    this.getExpenses();
  }

  render() { 
    return (
        <Container fluid>
          <Row xs={1}>
            <TitleBar/>
          </Row>
          <Row>
            <Col md={2}><Navbar/></Col>
            <Col md={10}>
              <Canvas/>
            </Col>
          </Row>
        </Container>
    );
  }
}

const mapStateToProps = state => {
  return { expense: state.expenses, budget: state.budget, categories: state.categories}
}

const mapDispatchToProps = dispatch => {
  return {
      getExpenses: (data) => dispatch(getExpenses(data)),
      getSettings: (data) => dispatch(getSettings(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
