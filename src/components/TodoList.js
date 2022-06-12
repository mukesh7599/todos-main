import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import TodoFilterControl from "./TodoFilterControl";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
  filterStatus,
  setFilterStatus,
}) => {
  const [todoCount, setTodoCount] = useState(0);

  console.log("qwertyuiopoiuytre", todos);

  useEffect(() => {
    const unCompletedTodos = todos.filter((todo) => todo.completed === false);
    console.log("unCompletedTodos", unCompletedTodos);
    setTodoCount(unCompletedTodos.length);
  }, [todos]);

  const textPlacer = filterStatus === "completed" ? "closed task" : "task";

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
    setFilterStatus("all");
  };

  return (
    <>
      <section className="todo-list-section">
        {filteredTodos.length < 1 ? (
          <p className="info-text">There's no {textPlacer}</p>
        ) : (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                todos={todos}
              />
            ))}
          </ul>
        )}
      </section>
      <div className="todo-filter-control">
        <div className="todos-count">{todoCount} items left</div>

        <div className="control-btn group filter-control-for-desktop">
          <TodoFilterControl
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
          />
        </div>

        <div className="control-btn">
          <button className="btn" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
