import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";


function App() {
    const [input, setInput] = useState("")
    const [toDoList, setToDoList] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("toDoList");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
      })

    useEffect(()=>{
        getLocalToDoList()
    },[])

    useEffect(()=>{
        saveLocalToDoList()
    },[toDoList])

    const deleteTodo = (id) => {
        console.log(id)
        setToDoList(toDoList.filter( obj => {
            return obj.id !== id;
        }));
    }
    const completeTodo = (id) => {
        setToDoList(toDoList.map( obj => {
            if(obj.id === id){
                obj.isCompleted = !obj.isCompleted
            }
            return obj
        }))
    }

    const editTodo = (id, text) => {
        setToDoList(
            toDoList.map( obj => {
                if(obj.id === id){
                    obj.name = text
                }
                return obj
            })
        )
    }

    const saveLocalToDoList = () => {
        console.log('saved')
        localStorage.setItem("toDoList", JSON.stringify(toDoList))
    }
    const getLocalToDoList = () => {
        if(localStorage.getItem(toDoList) === null){
            localStorage.setItem("toDoList", JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem("toDoList"))
            console.log(todoLocal)
            setToDoList(todoLocal)
        }
    }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    <ToDoForm toDoList={toDoList} setToDoList={setToDoList} input={input} setInput={setInput} ></ToDoForm>
    <ToDoList toDoList={toDoList} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo}></ToDoList>   
    </div>
  );
}

export default App;
