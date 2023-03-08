import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

export const Todo = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="todo">
      {" "}
      <ListItem>
        <ListItemText
          primary={todo.todo}
          secondary={todo.isDone ? "Completed" : "In Progress"}
        />
      </ListItem>
      <div className="todo__buttons">
        <Button
          id="todo_btn"
          variant="contained"
          onClick={() => toggleComplete(todo)}
        >
          Update Progress
        </Button>
        <Button
          id="todo_btn"
          variant="contained"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
