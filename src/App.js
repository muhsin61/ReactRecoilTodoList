import React from 'react';
import './App.css';
import { useRecoilValue, useRecoilState } from "recoil";
import { todoListState } from "./Atoms.js"
import { buttons } from "./Atoms.js"
import { stateLength } from "./Selectors";
import Todos from "./Todos"


function App() {
  const counts = useRecoilValue(todoListState)
  const myLength = useRecoilValue(stateLength)
  const [myButtons, setButtons] = useRecoilState(buttons);

  if (myButtons == "All") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <button onClick={() => { setButtons("Deleted") }}>Deleted</button>

        <div>
          All
        </div>
      </div>
    )
  }
  if (myButtons == "Complated") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <button onClick={() => { setButtons("Deleted") }}>Deleted</button>

        <div>
          Complated
        </div>
      </div>
    )
  }
  if (myButtons == "Deleted") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <button onClick={() => { setButtons("Deleted") }}>Deleted</button>
        <p>{counts[0]}</p>
      <p>{myLength}</p>
      <h5>{myButtons}</h5>
      <Todos todos={counts} />
      </div>
    )
  }

}

export default App;
