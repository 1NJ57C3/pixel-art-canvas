import { useState } from "react";

function Grid({ mouseDown, setMouseDown, action, setAction }) {
  const [selected, setSelected] = useState(false);

  function toggleGrid(e) {
    e.preventDefault();
    setSelected(!selected);
  }

  function handleMouseDown(e) {
    e.preventDefault();
    setMouseDown(true);
    setAction(!selected);
    toggleGrid(e);
  }

  function handleMouseUp(e) {
    e.preventDefault();
    setMouseDown(false);
  }

  function handleMouseEnter(e) {
    e.preventDefault();
    if (!!mouseDown) setSelected(action);
  }

  return (
    <div className={!!selected ? 'selectedGrid' : 'Grid'} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseEnter={handleMouseEnter} />
  )
}

export default Grid;