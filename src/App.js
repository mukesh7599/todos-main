<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import moment from "moment";

const data = [
  { id: 1, content: "Complete online JavsScript course", completed: true, time:"10:00", notified: false },
  { id: 2, content: "Jog around the park 3x", completed: false, time:"11:00", notified: false },
  { id: 3, content: "10 minutes meditation", completed: false, time:"08:00", notified: false },
];
function App() {
  const [themeLight, setThemeLight] = useState(true);
  const [todos, setTodos] = useState(data);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const themeClass = themeLight ? "light" : "dark";
  var timer
  useEffect(() => {
    const handleFilter = () => {
      console.log("filterStatus", filterStatus);
      switch (filterStatus) {
        case "active":
          return setFilteredTodos(todos.filter((todo) => !todo.completed));

        case "completed":
          return setFilteredTodos(todos.filter((todo) => todo.completed));

        default:
          return setFilteredTodos(todos);
      }
    };
    handleFilter();
    messageTimer()
  }, [todos, filterStatus]);

  const messageTimer = () => {
    clearInterval(timer)
     timer = setInterval(() => {
       var notifiedArr = []
      console.log("Inside timer", todos)
      todos.map(data => {
      console.log("Inside timer", data.time, moment().format('HH:mm') )
        if(data.time === moment().format('HH:mm') && !data.notified){
          alert(`Its time to do ${data.content}`) 
          notifiedArr.push(data)
        }    
      });
      
      // if (notifiedArrId.length === 0) {
      //   clearInterval(timer);
      //   messageTimer();
      //   return;
      // }

      // var arr = todos.map((data) => {
      //   if (notifiedArrId.includes(data.id)) {
      //     return {
      //       ...data,
      //       notified: true,
      //     };
      //   } else return data;
      // });
     
      
    }, 10000)
  }

  useEffect(() => {
    messageTimer()
    return () => clearInterval(timer)
    
  }, [])

  // var timer = setInterval(() => {
  //   console.log("Inside timer")
  //   todos.map(data => {
  //   console.log("Inside timer", data.time, moment().format('HH:mm') )
  //     if(data.time === moment().format('HH:mm')){
  //       alert(data.time)
  //     }
  //   })
  //   clearInterval(timer);
  // }, 5000)



// if(todos.time === moment().format('LT')){
//     setTimeout(() => {
//     alert("start");
//   }, 2000);
// }
  return (
    <>
      <div className={`mainTheme ${themeClass}`}>
        <div className="container">
          <Header themeLight={themeLight} setThemeLight={setThemeLight} />
          <main>
            <TodoForm todos={todos} setTodos={setTodos}/>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              filteredTodos={filteredTodos}
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
            />
          </main>
        </div>
      </div>
    </>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> 1d89e21 (Initialize project using Create React App)
  );
}

export default App;
