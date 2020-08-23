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
                //console.log(item)
                deneme.push(item)
            }
        });
        setTodos([...deneme])
    }
    const isActive = () => {
        console.log("test");
        let deneme = [];
        let test = AllTodos.forEach((item) => {
            console.log(item);
            let newItem = item;
            if (newItem == props.todos) {
                console.log(item.isActive == false);
                item.isActive === false;
            }
            deneme.push(newItem);
        });
        setTodos([...deneme]);
    }
    if (props) {
        console.log(props.todos)
        if (props.todos.isActive == true) {
            return (
                <div className="todo">
                    <input type="checkbox" defaultChecked={!props.todos.isActive} onClick={isActive} />
                    <h1>{props.todos.text}</h1>
                    <p onClick={handleClick}>Delete</p>
                </div>
            )
        } else {
            return (
                <div className="todo">
                    <input type="checkbox" defaultChecked={props.todos.isActive} onClick={isActive} />
                    <h1><s>{props.todos.text}</s></h1>
                    <p onClick={handleClick}>Delete</p>
                </div>
            )
        }
    }

}

