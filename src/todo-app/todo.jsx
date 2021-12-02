import React, { useRef } from "react";
import styles from "./todo-app-style/todo.module.css";
// import TodoForm from "./todoForm.jsx";
const Todo = (props) => {
  const { todo: t, onComplete } = props;
  const inputEdit = useRef();
  const renderTodo = () => {
    if (t.edit === false)
      return (
        <div className={`${styles.todo} ${t.isComplete === true ? `${styles.complete}` : ""}`}>
          <div onClick={onComplete} className={`${styles.text}`}>
            {t.text}
          </div>
          <div className={`${styles.handlers}`}>
            <button onClick={props.onEdit} className={`${styles.edit}`}>
              <i className="bi bi-pen"></i>
            </button>
            <button onClick={() => props.onDelete(t)} className={`${styles.delete}`}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      );
  };
  const renderTodoEdit = () => {
    if (t.edit === true)
      return (
        <div className={`${styles.todo}`}>
          <div className={`${styles.text}`}>
            <input ref={inputEdit} type="text" value={t.text} onChange={(e) => props.onEditInput(e, t)} />
          </div>
          <div className={`${styles.handlers}`}>
            <button type="submit" onClick={props.onEdit} className={`${styles.addEdit}`}>
              <div className={`${styles.checkCircle}`}>
                <i className="bi bi-check-circle"></i>
              </div>
            </button>
            <button onClick={() => props.onDelete(t)} className={`${styles.delete}`}>
              <i className="bi bi-trash"></i>
            </button>
          </div>
        </div>
      );
  };

  return (
    <>
      <div>{renderTodoEdit()}</div>
      <div>{renderTodo()}</div>
    </>
  );
};

export default Todo;
