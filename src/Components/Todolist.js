import React, { useState } from "react";
import TodoItem from "./TodoItem";

import style from "./Todolist.module.css";

const TodoList = ({ todosList, setTodosList }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = () => setTodos(todos.concat({ value: "", isDone: false }));

  return (
    <li className={style.TodoList}>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, i) => (
          <TodoItem
            key={i}
            todo={todo}
            setTodo={(value) =>
              setTodos(
                todos
                  .slice(0, i)
                  .concat([value])
                  .concat(todos.slice(i + 1))
              )
            }
            deleteTodo={() => {
              setTodos(todos.slice(0, i).concat(todos.slice(i + 1)));
            }}
          />
        ))}
      </ul>
    </li>
  );
};

export default TodoList;
