import React, { Component } from 'react';
import TestUseHover from './components/TestUseHover';
import TestUseMultipleStates from './components/TestUseMultipleStates';
import TestUsePrevious from './components/TestUsePrevious';
import TerryContextContainer from './containers/TerryContextContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Terry's Hooks and other fun stuff</h1>
        <div>
          <h3>useHover Hook</h3>
          <TestUseHover />
        </div>
        <div>
          <h3>useMultipleStates Hook</h3>
          <TestUseMultipleStates />
        </div>
        <div>
          <h3>usePrevious Hook</h3>
          <TestUsePrevious />
        </div>
        <div>
          <h3>Terry's own redux using useContext and useReducer</h3>
          <TerryContextContainer />
        </div>
      </div>
    );
  }
}

export default App;
