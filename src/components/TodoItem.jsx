import React, { useState, useRef } from "react";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { updateTodo, removeTodo, toggleTodoComplete } from "../app/todoSlice";

// const TodoItem = ({ id, item, completed }) => {
const TodoItem = (props) => {
  console.log(props);
  console.log(props.id);

  // const array = props.map((e) => e);
  // console.log(array);
  const { item, updateTodo, removeTodo, completeTodo } = props;
  // const dispatch = useDispatch();

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id}>
      {/* <input type="checkbox" checked={completed} onChange={() => dispatch(toggleTodoComplete({ id }))} /> */}
      {/* <span>
        {props.id}
        {props.item}----
      </span> */}

      <textarea ref={inputRef} disabled={inputRef} defaultValue={props.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)} />
      <div className="btns">
        <button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} onClick={() => changeFocus()}>
          {" "}
          <AiFillEdit />{" "}
        </button>
        <button whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          {" "}
          <IoClose />
        </button>{" "}
      </div>

      {/* <span className="delete" onClick={() => dispatch(removeTodo({ id }))}>
        &times;
      </span> */}
      {/* <span className="change" onClick={() => onEditToggle(id, content)}>
        HHH
      </span> */}
    </li>
  );
};
export default TodoItem;
