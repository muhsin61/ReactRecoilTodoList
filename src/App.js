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
      return (<Todos key={item.text} todos={item} ></Todos>)
    }
  });
  const Buttons = (
    <div>
      <button onClick={() => { setButtons("All") }}>All</button>
      <button onClick={() => { setButtons("Active") }}>Active</button>
      <button onClick={() => { setButtons("Complated") }}>Deleted</button>
    </div>
  );
  const handleSubmit = (e) => {
    console.log(e.target.value)
    e.preventDefault()
    setTodos([...AllTodos, { text: todoInput, isActive: true }]);
    console.log(AllTodos);
    setInput("");
  }
  const Inputs = (
    <form>
      <input type="text" onSubmit={handleSubmit} value={todoInput} onChange={(e) => setInput(e.target.value)}></input>
      <input type="submit" onClick={handleSubmit}></input>
    </form>
  );

  if (myButtons === "All") {
    return (
      <div className="App">
        {Buttons}
        {Inputs}
        <div>
          {Alltodo}
        </div>
      </div>
    )
  }
  if (myButtons === "Active") {
    return (
      <div className="App">
        {Buttons}
        {Inputs}
        <div>
          {Complated}
        </div>
      </div>
    )
  }
  if (myButtons === "Complated") {
    return (
      <div className="App">
        {Buttons}
        {AllTodos.map((item) => {
          if (!item.isActive) {
            return (<Todos key={item.text} todos={item} ></Todos>)
          }
        })}
      </div>
    )
  }

}

export default App;
