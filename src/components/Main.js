import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";
import TodoList from "./TodoList";
import InputField from "./InputField.jsx";
import "../App.css";

function Main() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <>
      {/* <body> */}
      {/* <div className="App"> */}
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
      {/* </div> */}
      {/* </body> */}
    </>
  );
}

export default Main;
