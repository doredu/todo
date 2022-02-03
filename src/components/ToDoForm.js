import React from "react";

const ToDoForm = ({toDoList, setToDoList, input, setInput}) => {
    const inputHandler = (e) => {
        console.log(e)
        setInput(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setToDoList([
            ...toDoList, 
            {id: Math.floor(Math.random() * 1000), name: input, isCompleted: false}]
        )
        setInput("")
    }
    return (
        <form onSubmit={submitHandler} className="todo-form">
            <input 
                type="text"
                placeholder="Add new task to the list..."
                className="todo-input"
                value={input}
                onChange={inputHandler}
            />
            <button className="todo-button" type="submit">
                add
            </button>
        </form>
    )
}

export default ToDoForm;