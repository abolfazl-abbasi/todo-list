import React, { useState, useEffect } from "react";
import styles from "./todo-app-style/todo.module.css";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoNav from "./todoNav";
// import _ from "lodash";

const TodoApp = () => {
  const [todo, setTodo] = useState([]);
  const [cloneTodo, setCloneTodo] = useState([...todo]);
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [editValue, setEditValue] = useState([...value]);

  useEffect(() => {
    setCloneTodo([...todo]);
  }, [todo]);

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
    setSelectValue("");
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

  const handleCounter = () => {
    if (selectValue === "complete") {
      return cloneTodo.filter((t) => t).length;
    }
    return cloneTodo.filter((t) => !t.isComplete).length;
  };

  const handleSelected = (e) => {
    setSelectValue(e.target.value);
    if (e.target.value === "") {
      setCloneTodo(todo);
    }
    if (e.target.value === "complete") {
      setCloneTodo(todo.filter((t) => t.isComplete));
    }
    if (e.target.value === "unComplete") {
      setCloneTodo(todo.filter((t) => !t.isComplete));
    }
  };

  return (
    <>
      <div className={`${styles.todoApp}`}>
        <TodoNav todo={cloneTodo} selectValue={selectValue} onSelected={handleSelected} onCounter={handleCounter} />
        <div>
          <TodoForm onFormSubmit={handleSubmit} onInputValue={handleInput} inputValue={value} />
          <TodoList
            onEditInput={handleEditInput}
            onComplete={handleComplete}
            onDelete={handleDelete}
            todo={cloneTodo}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </>
  );
};

export default TodoApp;
