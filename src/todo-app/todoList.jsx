import React from "react";
import Todo from "./todo";
import styles from "./todo-app-style/todo.module.css";
// import TodoForm from "./todoForm";

const TodoList = (props) => {
  const renderTodo = () => {
    return (
      <div className={`${styles.todoList}`}>
        {props.todo.map((t) => (
          <Todo
            onEdit={() => props.onEdit(t)}
            onEditInput={props.onEditInput}
            onComplete={() => props.onComplete(t)}
            onDelete={props.onDelete}
            key={t._id}
            todo={t}
            todos={props.todo}
          />
        ))}
      </div>
    );
  };
  return <div>{renderTodo()}</div>;
};

export default TodoList;
