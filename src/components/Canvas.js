import Grid from './Grid';

function Canvas({ rows, columns, mouseDown, setMouseDown, action, setAction }) {
  let canvas = [];
  let row = [];

  for (let i = 0; i < columns; i++) {
    row.push(<Grid key={'col'+i} mouseDown={mouseDown} setMouseDown={setMouseDown} action={action} setAction={setAction} />);
  }

  for (let i = 0; i < rows; i++) {
    canvas.push(row);
  }

  return (
    <div className='Canvas'>
      {canvas.map((r,i) => { return (
        <div className='row' key={'grid'+i}>
          {r}
        </div>
      )})}
    </div>
  )
}

export default Canvas;