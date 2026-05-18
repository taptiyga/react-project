import { Button, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import { useState } from "react";

const todo = {
  _id: "21sdfv323fs3",
  title: "Заняться бегом",
  description: "Купить кросовки",
  isDone: true,
};
function Homepage(props) {
  const [todos, setTodos] = useState([todo]);

  const handleAddTodo = () => {
    const newTodo = {
      _id: Date.now().toString(),
      title: "Заняться бегом",
      description: "Купить кросовки",
      isDone: true,
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <Typography>{props.username}</Typography>
      <Button onClick={handleAddTodo}>Добавить задачу</Button>
      {todos.map((item) => (
        <TodoItem key={item._id} todo={item} />
      ))}
    </div>
  );
}
export default Homepage;
