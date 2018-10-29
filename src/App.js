import React, { Component } from 'react';
import PuzzleGame from './components/PuzzleGame/PuzzleGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="AppPuzzlePieces">
          <PuzzleGame puzzleFolder="puzzle1"/>
        </div>
      </div>
    );
  }
}

export default App;
