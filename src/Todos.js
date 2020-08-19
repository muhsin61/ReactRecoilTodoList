import React from "react";
import "./App.css";
import { useRecoilState } from "recoil";
import { todoListState } from "./Atoms.js"



export default function Todos(props){
    const [AllTodos, setTodos] = useRecoilState(todoListState);
    const handleClick = (e) => {
        //alert(props.todos)
        let deneme = []
        //let test = AllTodos.splice(AllTodos.indexof(props), 1);
        let test = AllTodos.forEach((item)=>{
            if(item.text !== props.todos){
                console.log("item: ")
                deneme.push(item)
                console.log(deneme)
            }
        });
        setTodos([...deneme])
    }

    return(
        <div className="todo">
            <h1>{props.todos}</h1>
            <p onClick={handleClick}>Delete</p>
        </div>
    )
}

