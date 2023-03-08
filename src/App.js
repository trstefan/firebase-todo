import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import { db } from "./firebase_confing";
import {
  collection,
  addDoc,
  query,
  onSnapshot,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Todo } from "./Todo";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "todos"));
    const getTodos = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => getTodos();
  }, []);

  function addTodo(e) {
    e.preventDefault();
    if (todo === "") {
      alert("Please enter a valid todo");
      return;
    }

    addDoc(collection(db, "todos"), {
      todo: todo,
      isDone: false,
    });

    setTodo("");
  }

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      isDone: !todo.isDone,
    });
  };

  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className="App">
      <h2>Firebase CRUD ToDo List</h2>
      <form>
        <TextField
          id="standard-basic"
          label="Add Todo"
          variant="standard"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <Button type="submit" onClick={addTodo} variant="contained">
          Submit
        </Button>
      </form>
      <div style={{ width: "90vw", maxWidth: "500px" }}>
        <ul>
          {todos.map((todo, index) => (
            <Todo
              todo={todo}
              key={index}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
