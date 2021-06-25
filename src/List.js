import React from 'react';
import Todo from './Todo';

function List({todoArray,setTodoArray,filterTodo,setEditItem,setTextInput,setLocalStorage}) {
    return (
        <div className = "todoContainer">
            <ul className= "todoList">
                {
                    filterTodo.map((todo) => {
                    // todoArray.map((todo) => {
                        return <Todo
                            todoArray={todoArray}
                            setTodoArray={setTodoArray} 
                            key={todo.id}
                            todo = {todo} 
                            text = {todo.text}
                            setEditItem = {setEditItem}
                            setTextInput = {setTextInput}
                            setLocalStorage={setLocalStorage}
                        />
                    }).reverse()
                }
            </ul>
        </div>
    )
}

export default List;
