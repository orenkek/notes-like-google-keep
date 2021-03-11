import React, { useState } from "react";
import style from "./TodoItem.module.css";

const TodoItem = ({ todo, setTodo, deleteTodo, ...props }) => {
  const [isEditable, setIsEditable] = useState(false);

  const setIsDone = () => {
    setTodo({ value: todo.value, isDone: !todo.isDone });
  };

  const setValue = (e) => {
    setTodo({ value: e.target.value, isDone: todo.isDone });
  };

  return (
    <li className={style.TodoItem}>
      <input type="checkbox" value={todo.isDone} onClick={setIsDone} />
      {isEditable && (
        <input
          className={style.editField}
          value={todo.value}
          autoFocus={true}
          onChange={setValue}
          onBlur={() => setIsEditable(false)}
        />
      )}
      {!isEditable && (
        <span onClick={(e) => setIsEditable(true)}>{todo.value}</span>
      )}
      <button onClick={deleteTodo}>x</button>
    </li>
  );
};

export default TodoItem;
