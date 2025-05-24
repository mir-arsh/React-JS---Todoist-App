import './App.css';
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import { Todos } from './Components/Todos.js';
import { AddTodo } from './Components/AddTodo.js';
import { About } from './Components/About.js';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };

  const addTodo = (title) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
    };
    setTodos([...todos, myTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title2="Todolist Application" />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            } 
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;