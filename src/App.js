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
    <div className="App" style={{'--rows': rows, '--columns': columns}}>
      <Canvas rows={rows} columns={columns} mouseDown={mouseDown} setMouseDown={setMouseDown} action={action} setAction={setAction} />
      <Counter subject={"rows"} count={rows} setSubject={setRows} />
      <Counter subject={"columns"} count={columns} setSubject={setColumns} />
    </div>
  );
}

export default App;
