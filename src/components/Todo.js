import React, { useState } from "react";

const Todo = ({todo, deleteTodo, completeTodo, editTodo}) => {
    const [editMode, setEditMode] = useState(false)
    const [input, setInput] = useState(todo.name)
    const inputHandler = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }
    const saveHandler = (e) => {
        e.preventDefault()
        console.log('e', input)
        editTodo(todo.id, input)
        setEditMode(false)
    }
    return (
        <li key={todo.id}>
            <div className="todo">
                {!editMode ? 
                    <div className={`${todo.isCompleted ? "completed" : ''}`} onClick={() => setEditMode(true)}> {todo.name}</div> : 
                    <form onSubmit={saveHandler}><input type="text" value={input} onChange={inputHandler}/> <button type="submit">save</button></form>}
                <div className="action-buttons">
                    {completeTodo && <button className=".complete-btn" onClick={() => completeTodo(todo.id)}>{`${todo.isCompleted ? "undo" : "do"}`}</button>}
                    {deleteTodo &&<button className=".trash-btn" onClick={() => deleteTodo(todo.id)}>delete</button>}
                </div>
            </div>
            
        </li>
    )
}
export default Todo;