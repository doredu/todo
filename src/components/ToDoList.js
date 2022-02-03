import React from "react";
import Todo from "./Todo";

const ToDoList = ({toDoList, deleteTodo, completeTodo, editTodo}) => {
    console.log(toDoList)
    return (
        <div>
            <div className="todo-container">
                <h1>To Do:</h1>
                <ul className="todo-list">
                    {toDoList.filter((todo) => !todo.isCompleted).map( todo => {
                        return(
                            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} ></Todo>
                        )
                    })}
                </ul>
            </div>
            <div className="todo-container">
                <h1>Completed tasks:</h1>
                <ul className="todo-list">
                    {toDoList.filter((todo) => todo.isCompleted).map( todo => {
                        return(
                            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} ></Todo>
                        )
                    })}
                </ul>
            </div>
    </div>
    )
}

export default ToDoList;