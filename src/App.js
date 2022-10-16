import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am Leaving the world of Jihad todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("I am adding", title, desc);
    let SNo;
    if (todos.length == 0) {
      SNo = 0;
    } else {
      SNo = todos[todos.length - 1].SNo + 1;
    }
    const myTodo = {
      SNo: SNo,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
    <Header title={"My ToDo List"} search={true} />
      <Router>
      <Switch>
        <Route exact path="/" render={()=>{
          return(    
            <>   
          
          <AddTodo addtodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} /></>

  )}}>

        </Route>
        <Route exact path="/about">
          <About />
        </Route>


        </Switch>

      <Footer />
      </Router>
    </>
  );
}

export default App;
