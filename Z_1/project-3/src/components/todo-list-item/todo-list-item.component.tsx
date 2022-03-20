import React from 'react';

import './todo-list-item.styles.scss';

export interface TodoListItemProps {
  key: string,
  id: string,
  name: string,
  isCompleted: boolean,
  toggler: (id: string) => void,
  remover: (id: string) => void,
}

export default function TodoListItem({
  id,
  name,
  isCompleted,
  toggler,
  remover,
}: TodoListItemProps) {
  return (
    <li className="todoListItem">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggler(id)}
      />
      <p className={`todoListItem__name ${isCompleted ? 'completed' : ''}`}>
        {name}
      </p>
      <button className="todoListItem__removeBtn" onClick={() => remover(id)}><i className="fa-solid fa-trash"/></button>
    </li>
  );
}
