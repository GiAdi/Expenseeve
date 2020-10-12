import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TitleBar from './components/TitleBar';
import Navbar from './components/Navbar';
import Canvas from './components/Canvas';
import './App.css';

class App extends React.Component {

  render() {
    
    return (
      <Provider store = {store}>
        <div className="App">
          <TitleBar/>
          <Navbar/>
          <Canvas/>
        </div>
      </Provider>
    );
  }
}

export default App;
