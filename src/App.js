import React, { Component } from 'react';
import './App.css';
import ContainerOne from './components/ContainerOne';
import ContainerTwo from './components/ContainerTwo';
import ContainerThree from './components/ContainerThree';
import ContainerFour from './components/ContainerFour';
import ContainerFive from './components/ContainerFive';

class App extends Component {
  render() {
    //calling the Mouse render prop component
    return (
      <div className = 'App'>
        <header className="App-header">
          <h1 className="App-title">Advanced React Render Props and HOCS</h1>
        </header>
        <div className ='demo-area'>
        <ContainerOne/>
        <ContainerTwo/>
        <ContainerThree/>
        <ContainerFour/>   
        <ContainerFive />     
        </div>
      </div>
    );
  }
}

export default App;
