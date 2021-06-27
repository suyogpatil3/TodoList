import React,{useState} from 'react'
import './App.css'
export default function Todo({text,todoArray,setTodoArray,todo,setEditItem,setTextInput,setLocalStorage}) {
    // const [deleteTodo,setDeleteTodo] = useState("");
    const[isCompleted,setIsCompleted] = useState(false);
    const deleteTodo = () => {
        let afterDeletionArray = todoArray.filter((element) => element.id !== todo.id);
        setTodoArray(afterDeletionArray);
        setLocalStorage(afterDeletionArray);
    }

    const editTodo = () =>{
        setEditItem(todo.id);
        setTextInput(todo.text);

        
    }

    const complete = () => {
        // let edit = ;
        // console.log(edit);

        (todo.completed===true) ? setIsCompleted(true) : setIsCompleted(false);

        // (todo.completed===true) ? document.getElementById("edit").disabled = true : document.getElementById("edit").disabled = false;
        let completedTodo = todoArray.map((el) => {
           if (el.id === todo.id)  {
               return{
                ...el,completed : !el.completed,
               }
           } 
           return el 
        })
        setTodoArray(completedTodo);
        setLocalStorage(completedTodo);
    }
    return (
        <div>
        <div className={(todo.completed) ? "todo_checked" : "todo"} >
            <div className="todoText">
                <button onClick={complete} id="check" ><i className="fas fa-check"></i></button>
                <li className="text">{text}</li>
            </div> 
            <div className="buttons">
                
                <button onClick={editTodo} disabled={todo.completed} id = "edit" className = {isCompleted ? "editDisabled" : "edit"}><i className="fas fa-edit "></i></button>
                <button onClick = {deleteTodo} id = "trash"><i className="fas fa-trash"></i></button>
            </div>
        </div>
        <br></br>
        </div>
    )
}
