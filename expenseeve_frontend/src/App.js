import React from 'react';
import { Provider } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import store from './redux/store';
import TitleBar from './components/TitleBar';
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';
import './App.css';

class App extends React.Component {

  render() {
    
    return (
      <Provider store = {store}>
        <Container fluid>
          <Row xs={1}>
            <TitleBar/>
          </Row>
          <Row>
            <Col md={2}><Navbar/></Col>
            <Col md={10}><Canvas/></Col>
          </Row>
        </Container>
      </Provider>
    );
  }
}

export default App;
