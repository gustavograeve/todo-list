import React, { useEffect, useState, useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            name="text"
            className="todo-input"
            value={input}
            placeholder="Edite sua tarefa..."
            onChange={handleInputChange}
            ref={inputRef}
          />
          <button className="todo-button">Editar</button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="text"
            className="todo-input"
            value={input}
            placeholder="Adicione uma tarefa..."
            onChange={handleInputChange}
            ref={inputRef}
          />
          <button className="todo-button">Adicionar</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
