import { useState } from "react";
import CheckIcon from "../images/icon-check.svg";

const TodoItem = ({ todo, todos, setTodos}) => {
  const [multiTodo, setMultiTodo] = useState(todo);

  console.log("multiTodo",multiTodo);

  const classes = multiTodo.completed ? "completed" : "";
  const checkIcon = multiTodo.completed ? (
    <img src={CheckIcon} alt="Completed" />
  ) : (
    ""
  );

  const switchCompleted = () => {
    setMultiTodo({ ...multiTodo, completed: !multiTodo.completed });
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    console.log("updatedTodos", updatedTodos);
    setTodos(updatedTodos);

  };

  return (
    <li className={classes}>
      <label htmlFor={`todoCheckbox-${todo.id}`}>Completed Checkbox</label>
      <input
        id={`todoCheckbox-${todo.id}`}
        type="checkbox"
        name="completed-checkbox"
        defaultChecked={multiTodo.completed}
      />
      <div className="checkbox-border-wrap">
        <span className="checkbox" onClick={switchCompleted}>
          {checkIcon}
        </span>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
      <p>{multiTodo.content}</p>
      <p >{multiTodo.time}</p>
      </div>
    </li>
  );
};

export default TodoItem;
