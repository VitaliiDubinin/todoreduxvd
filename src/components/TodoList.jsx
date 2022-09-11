import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodoComplete, updateTodo } from "../app/todoSlice";
import { AnimatePresence, motion } from "framer-motion";
// import { addTodo, completeTodo, removeTodo, updateTodo } from "../app/todoSlice";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  // console.log(state.todos);
  // console.log(state.todos.item);
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch, id) => {
  console.log(id);
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    completeTodo: (id) => dispatch(toggleTodoComplete(id)),
  };
};

const TodoList = (props) => {
  // const todos = useSelector((state) => state.todos.todos);
  // console.log(props.todos);
  // console.log(props.todos.todos);
  const newar = props.todos.todos.todos;
  // console.log(newar[0].id);
  const array = newar.map((e) => e.id);
  // console.log(array);
  // console.log(array.length);
  // console.log("newar:" + newar[0].id);
  const [sort, setSort] = useState("active");
  return (
    <>
      {/* <ul>
        {props.todos.length > 0
          ? props.todos.map((item) => {
              return (
                // {todos.map((item) => (
                // <TodoItem key={item.id} {...item} />
                <TodoItem key={item.id} {...item} removeTodo={props.removeTodo} updateTodo={props.updateTodo} />
              );
            })
          : null}
      </ul> */}

      <div className="buttons">
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("active")}>
          Active
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("completed")}>
          Completed
        </motion.button>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setSort("all")}>
          All
        </motion.button>
      </div>

      <ul>
        {/* <AnimatePresence> */}
        {props.todos.todos.todos.length > 0 && sort === "active"
          ? // {
            props.todos.todos.todos.map((todo) => {
              return (
                todo.completed === false && (
                  <TodoItem
                    key={todo.id}
                    item={todo.item}
                    id={todo.id}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : // })
            null}
        {/* for completed items */}
        {props.todos.todos.todos.length > 0 && sort === "completed"
          ? props.todos.todos.todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item.item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                )
              );
            })
          : null}
        {/* for all items */}
        {props.todos.todos.todos.length > 0 && sort === "all"
          ? props.todos.todos.todos.map((todo) => {
              return (
                <TodoItem
                  key={todo.id}
                  item={todo.item}
                  id={todo.id}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completeTodo={props.completeTodo}
                  todo={[todo]}
                  {...todo}
                />
              );
            })
          : null}
        {/* </AnimatePresence> */}
      </ul>
    </>
  );
};

// export default TodoList;
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
