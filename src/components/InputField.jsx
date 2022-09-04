import { text } from "../app/todoSlice";
import { useSelector, useDispatch } from "react-redux";

const InputField = ({ itemtext, handleInput, handleSubmit }) => {
  // console.log(text);
  // const item = useSelector(text);

  // console.log(item);
  return (
    <>
      <label>
        <input value={itemtext} onChange={(e) => handleInput(e.target.value)} />

        <button onClick={handleSubmit}>Add Todo</button>
      </label>
    </>
  );
};

export default InputField;
