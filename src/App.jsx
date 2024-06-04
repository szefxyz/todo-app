import { useState, useEffect } from "react";
import styles from "./App.module.css";
import { Form } from "./components/Form/Form";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [isFormShow, setIsFormShow] = useState(false);

  const initialTasks = JSON.parse(localStorage.getItem("tasks")) || [
    { id: 1, name: "Jog around the park 3x", done: false },
    { id: 2, name: "Pick up groceries", done: false },
    { id: 3, name: "Read for 1 hour", done: true },
  ];

  const [todos, setTodos] = useState(initialTasks);

  useEffect(() => {
    const tasksJSON = JSON.stringify(todos);

    localStorage.setItem("tasks", tasksJSON);
  }, [todos]);

  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodoName, done: false, id: Math.random() },
    ]);
    setIsFormShow(false);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          done: true,
        };
      })
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.text}>
          <h1>TODO</h1>
          <h5>{getSubheading(todos.length)}</h5>
        </div>
        {!isFormShow && (
          <button onClick={() => setIsFormShow(true)} className={styles.button}>
            +
          </button>
        )}
      </header>
      {isFormShow && (
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          onFormSubmit={(newTodoName) => addItem(newTodoName)}
        />
      )}
      <ul>
        {todos.map(({ name, done, id }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
