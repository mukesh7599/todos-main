import React, { useState } from "react";
import uniqid from "uniqid";

const TodoForm = ({setTodos}) => {
  const [todoInput, setTodoInput] = useState("");
  const [time, setTime] = useState("");

  const dateChange = (e) => {
    setTime(e.target.value);
  };
  const formInput = (e) => {
    setTodoInput(e.target.value);
  };

  const submitTodo = (e) => {
  
    e.preventDefault();
    if (todoInput == "") return alert("Please Set Remainder");
    if (time == "") return alert("Please Set Time");
    const newTodo = {
      id: uniqid(),
      content: todoInput.trim(),
      time: time,
      completed: false,
      notified: false,
    };
    console.log("newTodo", newTodo);

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTodoInput("");
    setTime("");
  };

  //   console.log("todos", todos);

  return (
    <div className="form-control">
      <div className="checkbox-border-wrap">
        <span className="checkbox"></span>
      </div>

      <form onSubmit={submitTodo} style={{display:"flex"}}>
        <label htmlFor="todoInput">Add New Todo</label>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="todo-input"
          value={todoInput}
          onChange={formInput}
        />
        <input className="setRemainder"
      style={{width:"40%",cursor:"pointer",marginLeft:"10px"}}
          type="time"
          value={time}
          
          onChange={dateChange}
          placeholder="Set Remainder"
        ></input>

        <button className="activateTodo" style={{width:"40%",cursor:"pointer",marginLeft:"10px"}} type="submit" id="submitNewTodo">
          Set Todo
        </button>
      </form>
    
    </div>
  );
};
export default TodoForm;
