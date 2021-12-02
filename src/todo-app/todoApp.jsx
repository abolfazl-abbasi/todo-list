import React, { useState, useEffect } from "react";
import styles from "./todo-app-style/todo.module.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const [editValue, setEditValue] = useState(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return alert("Your input is null! 😕");
    }
    const newTodo = {
      _id: Math.random().toString(36).slice(2, 12),
      text: value,
      isComplete: false,
      date: Date.now(),
      edit: false,
    };
    setTodo([...todo, newTodo]);
    setValue("");
  };

  const handleComplete = (e) => {
    const updateTodo = [...todo];
    const index = todo.indexOf(e);
    updateTodo[index] = { ...e };
    updateTodo[index].isComplete = !updateTodo[index].isComplete;
    setTodo(updateTodo);
  };

  const handleDelete = (e) => {
    setTodo(todo.filter((t) => e._id !== t._id));
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = (e) => {
    const updateTodo = [...todo];
    const index = todo.indexOf(e);
    updateTodo[index] = { ...e };
    updateTodo[index].edit = !updateTodo[index].edit;
    setTodo(updateTodo);
  };

  const handleEditInput = (e, t) => {
    setTodo(todo.map((to) => `${(to.edit = false)} ${(t.edit = true)}`));
    if (true) {
      setEditValue(e.target.value);
    }
    const updateTodo = [...todo];
    const index = todo.indexOf(t);
    updateTodo[index] = { ...t };
    updateTodo[index].text = e.target.value;
    updateTodo[index].isComplete = false;
    setTodo(updateTodo);
  };

  return (
    <>
      <div className={`${styles.todoApp}`}>
        <div>
          <span className={`${styles.heading} ${styles.one}`}>T</span>
          <span className={`${styles.heading} ${styles.two}`}>O</span>
          <span className={`${styles.heading} ${styles.one}`}>D</span>
          <span className={`${styles.heading} ${styles.two}`}>O</span>
          <span className={`${styles.heading} ${styles.three}`}> </span>
          <span className={`${styles.heading} ${styles.four}`}>L</span>
          <span className={`${styles.heading} ${styles.three}`}>I</span>
          <span className={`${styles.heading} ${styles.four}`}>S</span>
          <span className={`${styles.heading} ${styles.five}`}>T</span>
        </div>
        <div>
          <TodoForm onFormSubmit={handleSubmit} onInputValue={handleInput} inputValue={value} />
          <TodoList
            onEditInput={handleEditInput}
            onComplete={handleComplete}
            onDelete={handleDelete}
            todo={todo}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
