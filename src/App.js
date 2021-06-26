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


  function filterTodoList(){
    if(status === 'Completed'){
      setFilterTodo(todoArray.filter((item) => item.completed));
    }
    else if(status === "Incomplete"){
      setFilterTodo(todoArray.filter((item) => !item.completed));
    }
    else {
      document.getElementById("select").value= "All";
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
