import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./app/todoSlice";
import TodoList from "./components/TodoList.jsx";
import InputField from "./components/InputField.jsx";
import "./App.css";

function App() {
  const [itemtext, setItemtext] = useState("");
  // console.log(itemtext);
  const dispatch = useDispatch();
  const addTask = () => {
    console.log(itemtext);
    dispatch(addTodo({ itemtext }));

    setItemtext("");
  };

  return (
    <>
      <div className="App">
        <InputField item={itemtext} handleInput={setItemtext} handleSubmit={addTask} />
        <TodoList />
      </div>
    </>
  );
}

export default App;
