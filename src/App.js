import './App.css';
import Controls from './controls/Controls';
import Grid from './grid/Grid';
import { useState } from 'react';


function App() {

  const [x, setX] = useState(6);
  const [y, setY] = useState(6);

  const gridHeight = 11;
  const gridWidth = 11;

  const moveRight = () => {
    if (x >= gridWidth) {
      return;
    }
    setX((prev) => {
      console.log('moveRight');
      return prev + 1
    });
  }
  const moveLeft = () => {
    if (x <= 1) {
      return;
    }
    setX((prev) => {
      console.log('moveLeft');
      return prev - 1
    });
  }
  const moveUp = () => {
    if (y <= 1 ) {
      return;
    }
    setY((prev) => {
      console.log('moveUp');
      return prev - 1
    });
  }
  const moveDown = () => {
    if (y >= gridHeight) {
      return;
    }
    setY((prev) => {
      console.log('moveDown');
      return prev + 1
    });
  }

  const movement = {
    moveUp,
    moveDown,
    moveRight,
    moveLeft,
  }

  return (
    <div className="App">

      <div id="controls" className="half-width">
        <Controls movement={movement} />
      </div>

      <div id="grid" className="half-width">
        <Grid x={x} y={y} gridWidth={gridWidth} gridHeight={gridHeight} />
      </div>

    </div>
  );
}

export default App;
