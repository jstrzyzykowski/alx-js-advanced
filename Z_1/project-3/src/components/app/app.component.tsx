import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import TodoList from '../todo-list/todo-list.component';
import {TodoListItemProps} from '../todo-list-item/todo-list-item.component';
import Notification from '../notification/notification.component';

import './app.styles.scss';

type TodoData = { todoData: string };

export default function App() {
  const [todoData, setTodoData] = useState<TodoData>({
    todoText: '',
  });
  const [todos, setTodos] = useState<TodoListItemProps[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (localStorage.getItem('todos')) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    } else {
      localStorage.setItem('todos', JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setErrorMessage('');
  }, [todos]);

  const completeToggler = (todoId) => {
    const currTodo = todos.find((todo) => todo.id === todoId);

    setTodos([
      ...todos.filter((todo) => todo.id !== todoId),
      {
        ...currTodo,
        isCompleted: !currTodo.isCompleted,
      },
    ]);
  };

  const removeTodo = (todoId) => setTodos(todos.filter((todo) => todo.id !== todoId));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoData.todoText.trim().length <= 2) {
      setErrorMessage('Text mus be at least 3 characters');
      setTodoData({
        todoText: '',
      });
      return;
    }

    const id = uuid();
    const newTodo = {
      id,
      name: todoData.todoText,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);
    setTodoData({
      todoText: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTodoData({
      ...todoData,
      [name]: value,
    });
  };

  return (
    <div className="app">
      <div className="app__todoListContainer">
        <div className="app__todoListContainer-header">
          <h1 className="app__todoListContainer-header-title">Todo List</h1>
        </div>
        <form onSubmit={handleSubmit} className="app__todoListContainer-form">
          <input
            type="text"
            value={todoData.todoText}
            onChange={handleChange}
            name="todoText"
            placeholder="Write something..."
            minLength={3}
            maxLength={255}
          />
          <button type="submit"><i className="fa-solid fa-plus"/></button>
        </form>
        {errorMessage && <Notification type="error" message={errorMessage}/>}
        <TodoList todos={todos} toggler={completeToggler} remover={removeTodo} />
      </div>
    </div>
  );
}
