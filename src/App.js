import './reset.css';
import './App.css';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import CheckAllAndRemaining from './components/CheckAllAndRemaining.js';
import TodoFilters from './components/TodoFilters.js';
import ClearCompletedBtn from './components/ClearCompletedBtn.js';
import { useEffect, useState } from 'react';

function App() {

  let [ todos, setTodos ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then((todos) => {
      setTodos(todos)
    })
  }, [])


  let addTodo = (todo) => {
    fetch('http://localhost:3001/todos' ,{
      method : "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(todo)
    })
    setTodos(prevState => [...prevState,todo])
  }

  let deleteTodo = (todoId) => {
    fetch(`http://localhost:3001/todos/${todoId}`,{
      method : "DELETE"
    })
    setTodos(prevState => {
      return prevState.filter(todo => {
        return todo.id !== todoId
      });// [todo,todo]
    })
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} deleteTodo={deleteTodo}/>
        <CheckAllAndRemaining/>
        <div className="other-buttons-container">
          <TodoFilters/>
          <ClearCompletedBtn/>
        </div>
      </div>
    </div>
  );
}

export default App;
