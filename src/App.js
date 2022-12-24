import './App.css';
import { useState } from 'react';
import Canvas from './components/Canvas';
import Counter from './components/Counter';

function App() {
  const [mouseDown, setMouseDown] = useState(false);
  const [action, setAction] = useState(null);
  const [rows, setRows] = useState(50);
  const [columns, setColumns] = useState(50);

  return (
    <div className="App" style={{ '--max-grids': rows > columns ? rows : columns }}>
      <Canvas rows={rows} columns={columns} mouseDown={mouseDown} setMouseDown={setMouseDown} action={action} setAction={setAction} />
      <div className="canvas-size">
        <Counter subject={"rows"} count={rows} setSubject={setRows} />
        <Counter subject={"columns"} count={columns} setSubject={setColumns} />
      </div>
    </div>
  );
}

export default App;
