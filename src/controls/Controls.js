import './Controls.css';

const Controls = (props) => {
  const movement = props.movement;

  const move = (direction) => {
    movement['move' + direction]();
  }

  return (
    <div id="control-panel">
      <button onClick={() => move('Left')}>left</button>
      <button onClick={() => move('Down')}>down</button>
      <button onClick={() => move('Up')}>up</button>
      <button onClick={() => move('Right')}>right</button>
    </div>
  );
}

export default Controls;
