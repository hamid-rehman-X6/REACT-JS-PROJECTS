import React, { useState } from "react";

const Three = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      console.log(todos);
      console.log(input);
      setInput("");
    }
  };

  const RemoveTodo = (index) => {
    console.log(index);
    const remove = todos.filter((_, id) => id !== index);
    console.log(remove);
    setTodos(remove);
  };
  return (
    <>
      <div>TODO APP</div>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => RemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Three;
