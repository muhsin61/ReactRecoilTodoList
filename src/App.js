import React, { useState } from 'react';
import './App.css';
import { useRecoilValue, useRecoilState } from "recoil";
import { todoListState } from "./Atoms.js"
import { buttons } from "./Atoms.js"
import { stateLength } from "./Selectors";
import Todos from "./Todos"


function App() {
  //const AllTodos = useRecoilValue(todoListState);
  const myLength = useRecoilValue(stateLength);
  const [myButtons, setButtons] = useRecoilState(buttons);
  const [AllTodos, setTodos] = useRecoilState(todoListState);
  const [todoInput, setInput] = useState("");

  const Alltodo = AllTodos.map((item) => {
    return (<Todos key={item.text} todos={item} ></Todos>)
  });

  const Complated = AllTodos.map((item) => {
    if (item.isActive) {
      return (
        <Todos key={item.text} todos={item} ></Todos>
      )
    }
  });

  const handleSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    setTodos([...AllTodos, { text: todoInput, isActive: true }]);
    console.log(AllTodos);
    setInput("");
  }
  if (myButtons === "All") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Active") }}>Active</button>
        <button onClick={() => { setButtons("Complated") }}>Deleted</button>
        <form>
          <input type="text" onSubmit={handleSubmit} onChange={(e) => setInput(e.target.value)}></input>
          <input type="submit" onClick={handleSubmit}></input>
        </form>
        <div>
          {Alltodo}
        </div>
      </div>
    )
  }
  if (myButtons === "Active") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Active") }}>Active</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>
        <form>
          <input type="text" onSubmit={handleSubmit} onChange={(e) => setInput(e.target.value)}></input>
          <input type="submit" onClick={handleSubmit}></input>
        </form>
        <div>
          {Complated}
        </div>
      </div>
    )
  }
  if (myButtons === "Complated") {
    return (
      <div className="App">
        <button onClick={() => { setButtons("All") }}>All</button>
        <button onClick={() => { setButtons("Active") }}>Active</button>
        <button onClick={() => { setButtons("Complated") }}>Complated</button>

        <p>{myLength}</p>
        <h5>{myButtons}</h5>

      </div>
    )
  }

}

export default App;
