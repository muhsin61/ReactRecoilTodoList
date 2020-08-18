import  React, {useState } from 'react';
import './App.css';
import { useRecoilValue, useRecoilState } from "recoil";
import { todoListState } from "./Atoms.js"
import { buttons } from "./Atoms.js"
import { stateLength } from "./Selectors";
import Todos from "./Todos"


function App() {
  const AllTodos = useRecoilValue(todoListState);
  const myLength = useRecoilValue(stateLength);
  const [myButtons, setButtons] = useRecoilState(buttons);
  const [todoInput, setInput] = useState("")
  const Alltodo = AllTodos.map((item) => {
    return (<Todos key={item.text} todos={item.text} ></Todos>)
  });
  const handleSubmit = (e) => {
    console.log("test")
    e.preventDefault()
  }
  if (myButtons === "All") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <button onClick={() => { setButtons("Deleted") }}>Deleted</button>
        <h1>{todoInput}</h1>
        <form>
          <input type="text" onSubmit={handleSubmit} onChange={(e)=>setInput(e.target.value)}></input>
          <input type="submit" onClick={handleSubmit}></input>
        </form>
        <div>
          {Alltodo}
        </div>
      </div>
    )
  }
  if (myButtons === "Complated") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <button onClick={() => { setButtons("Deleted") }}>Deleted</button>
        <form>
          <input type="text" onSubmit={handleSubmit} onChange={(e)=>setInput(e.target.value)}></input>
          <input type="submit" onClick={handleSubmit}></input>
        </form>
        <div>
          Complated
        </div>
      </div>
    )
  }
  if (myButtons === "Deleted") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <button onClick={() => { setButtons("Deleted") }}>Deleted</button>

        <p>{myLength}</p>
        <h5>{myButtons}</h5>

      </div>
    )
  }

}

export default App;
