import React, { Component } from 'react';
import PuzzleGame from './components/PuzzleGame/PuzzleGame';
import PuzzleImage from './components/FullPuzzle/FullPuzzle';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppPuzzlePieces">
          <PuzzleGame puzzleFolder="puzzle1"/>
        </div>
        <div className="AppPuzzleFull">
          <PuzzleImage image="full" />
        </div> 
      </div>
    );
  }
}

export default App;
