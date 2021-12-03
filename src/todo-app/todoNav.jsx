import React from "react";
import styles from "./todo-app-style/todo.module.css";

const TodoNav = (props) => {
  return (
    <>
      <div className={`${styles.navbar}`}>
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
        <div
          className={`${props.onCounter() > 0 ? styles.counter : styles.counterHide} ${
            props.selectValue === "complete" ? styles.completeCounter : ""
          }`}
        >
          {props.onCounter()}
        </div>
      </div>
      <div className={`${styles.selectBox}`}>
        <select
          disabled={props.todo.length <= 0 && props.selectValue === "" ? true : false}
          defaultValue={""}
          onChange={(e) => props.onSelected(e)}
          className={`${styles.select}`}
        >
          <option selected={props.selectValue === "" ? true : false} value="">
            All
          </option>
          <option selected={props.selectValue === "complete" ? true : false} value="complete">
            complete
          </option>
          <option selected={props.selectValue === "unComplete" ? true : false} value="unComplete">
            unComplete
          </option>
        </select>
      </div>
    </>
  );
};

export default TodoNav;
