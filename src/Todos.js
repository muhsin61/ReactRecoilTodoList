import React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { todoListState } from "./Atoms.js";



export default function Todos(props) {
    const [AllTodos, setTodos] = useRecoilState(todoListState);
    const handleClick = (e) => {
        let deneme = []
        let test = AllTodos.forEach((item) => {
            console.log(item)
            if (item !== props.todos) {
                deneme.push(item)
                //console.log(item)
            }
        });
        setTodos([...deneme])
    }
    if (props) {
        console.log(props.todos)
        if (props.todos.isActive == true) {
            return (
                <div className="todo">
                    <input type="checkbox" defaultChecked={!props.todos.isActive} onChange={(e) => console.log(e.checked + e.target.value)} />
                    <h1>{props.todos.text}</h1>
                    <p onClick={handleClick}>Delete</p>
                </div>
            )
        } else {
            return (
                <div className="todo">
                    <input type="checkbox" defaultChecked={props.todos.isActive} onChange={(e) => console.log(e.checked + e.target.value)} />
                    <h1><s>{props.todos.text}</s></h1>
                    <p onClick={handleClick}>Delete</p>
                </div>
            )
        }
    }

}

