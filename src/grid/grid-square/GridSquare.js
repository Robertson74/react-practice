import './GridSquare.css';

const GridSquare = (props) => {
  const shouldSelect = props.select;
  const style = {
    backgroundColor: shouldSelect ? 'red' : 'white',
  }

  return (
    <div className="square" style={style}></div>
  );
}

export default GridSquare;
