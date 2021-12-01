import React, { useRef, useEffect } from "react";
import styles from "./todo-app-style/todo.module.css";

const TodoForm = (props) => {
  const todoInput = useRef();
  useEffect(() => {
    todoInput.current.focus();
  }, []);
  return (
    <form onSubmit={(e) => props.onFormSubmit(e)} className={`${styles.form}`}>
      <input
        ref={todoInput}
        value={props.inputValue}
        onChange={(e) => props.onInputValue(e)}
        className={`${styles.input}`}
        type="text"
      />
      <button className={`${styles.subBtn}`} type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
