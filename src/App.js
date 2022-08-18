import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
