import GridSquare from './grid-square/GridSquare';
import './Grid.css';

const Grid = (props) => {

  const x = props.x;
  const y = props.y;
  const gridWidth = props.gridWidth;
  const gridHeight = props.gridHeight;


  const shouldSelect = (gridX, gridY) => {
    return x === gridX && y === gridY;
  }


  return (
    <div>
      {Array(gridHeight).fill('').map((el, yindex) => {
        return (
          <div className="row" key={Math.random()}>
            {Array(gridWidth).fill('').map((el, xindex) => {
              return (
                <div>
                  <GridSquare key={Math.random()} select={shouldSelect(xindex + 1, yindex + 1)} />
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Grid;
