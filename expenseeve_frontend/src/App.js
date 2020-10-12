import React from 'react';
import TitleBar from './components/TitleBar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Settings from './components/Settings';
import Profile from './components/Profile';
import './App.css';

class App extends React.Component {

  state = {currentTab: 'profile'};

  changeTab = (newTab) => {
    this.setState({currentTab : newTab})
  }

  render() {
    let currentTab;

    switch(this.state.currentTab) {
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
      <div className="App">
        <TitleBar/>
        <Navbar changeTab={this.changeTab} />
        {currentTab}
      </div>
    );
  }
}

export default App;
