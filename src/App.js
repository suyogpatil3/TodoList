import React,{useState , useEffect} from 'react';
import './App.css';
import TodoForm from './TodoForm';
import List from './List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [textInput,setTextInput] = useState("");
  const saveditems = JSON.parse(localStorage.getItem('todoArray'));
  const[todoArray,setTodoArray] = useState(saveditems || []);
  const [status,setStatus] = useState("All");
  const[filterTodo,setFilterTodo] = useState([]);
  const[editItem,setEditItem] = useState("");
  const[counter,setCounter] = useState(0);


  function filterTodoList(){
    let newArray = [];
    if(status === 'Completed'){
       todoArray.filter((item) => item.completed);
      setCounter(newArray.length);
      setFilterTodo(newArray);
    }
    else if(status === "Incomplete"){
      newArray = todoArray.filter((item) => !item.completed);
      setCounter(newArray.length);
      setFilterTodo(newArray);
    }
    else {
      document.getElementById("select").value= "All"; //to toggle selection to all whenever the user gives input.
      setCounter(todoArray.length);
      setFilterTodo(todoArray);
    }
  }

  function setLocalStorage(array){
    localStorage.setItem("todoArray", JSON.stringify(array));
}
 
  useEffect(()=>{
    filterTodoList();
  },[todoArray,status])

  return (
    <div className="App ">
      <p id="h1">Todo List</p>
      <div class="form">
      <TodoForm 
        todoArray={todoArray} 
        setTodoArray={setTodoArray} 
        textInput={textInput} 
        setTextInput = {setTextInput}
        setStatus = {setStatus}
        status={status}
        editItem = {editItem}
        setEditItem = {setEditItem}
        setLocalStorage = {setLocalStorage}
        counter = {counter}
      />
      <List
        todoArray={todoArray}
        filterTodo = {filterTodo}
        setTodoArray = {setTodoArray} 
        setEditItem = {setEditItem}
        setTextInput={setTextInput}
        setLocalStorage ={setLocalStorage}
      />
      </div>
    </div>
  );
}

export default App;
