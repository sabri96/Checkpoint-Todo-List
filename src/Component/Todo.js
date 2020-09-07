import React from "react";
import EditModal from "./EditModal";

const Todo = ({ todo, deleteTodo, completeTodo, EditTodo }) => {
  const rmv = () => deleteTodo(todo.id);
  const complete = () => completeTodo(todo.id);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <input type="checkbox" onClick={complete} />
      <p
        style={
          todo.isCompleted
            ? {
                textDecoration: "line-through",
                margin: 10,
              }
            : { margin: 10 }
        }
      >
        {todo.text}
      </p>
      <button
        onClick={rmv}
        style={{
          borderRadius: "0.25rem",
          marginLeft: 32,
          marginRight: 5,
          color: "#282c34",
          borderColor: "white",
          border: "1px solid transparent",
        }}
      >
        Delete
      </button>
      <EditModal EditTodo={EditTodo} todo={todo} />
    </div>
  );
};

export default Todo;