import React from 'react';

const TodoForm = ({setTextInput,textInput,setStatus,setEditItem, todoArray,setTodoArray,editItem,setLocalStorage}) => {

 const getInput = (event) => {
    setTextInput(event.target.value);
 }
 const changeStatus = (e) => {
     setStatus(e.target.value);
 }

 const submitTodo = (e) =>{
     setStatus("All");
    e.preventDefault();
    if(textInput!==""){
        if(editItem){
            todoArray.map((item) => {
                if(item.id===editItem) {
                    (item.text = textInput)
                    setTodoArray(todoArray);
                    setLocalStorage(todoArray);
                    // return true
                }
            })
            setEditItem("");
            setTextInput("");
        }
        else{
           let newTodoArray = [...todoArray,{text : textInput , completed : false ,id: Math.floor(Math.random()*800000) }];
           setTodoArray(newTodoArray);
           setLocalStorage(newTodoArray);
            setTextInput("");
        }
      
    }
    else return;
   
 }
    return(
        <form>
            <div className="formInput">
            <input value={textInput} type = "text" className = "input" onChange = {getInput} placeholder="Add a todo!"/>
            <button className = "add" type = "submit" onClick={submitTodo}>
                <i className={(editItem) ? "fas fa-edit " : "fas fa-plus-circle "}></i>
            </button>
            </div>
            <div id="selectTodo">
                <select name = "todoOptions" id="select" onChange={changeStatus}>
                    <option id="all" value = "All">All</option>
                    <option value = "Completed" >Completed</option>
                    <option value = "Incomplete" >Incomplete</option>
                </select>
            </div>
            
        </form>
    );
}

export default TodoForm;