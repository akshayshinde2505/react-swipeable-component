import React from 'react';
import './App.css';
import CardContainer from './container/CardContainer';
import ConfettiComponent from './components/ConfettiComponent';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ConfettiComponent />
        <CardContainer />
      </div>
    );
  }
}

export default App;
