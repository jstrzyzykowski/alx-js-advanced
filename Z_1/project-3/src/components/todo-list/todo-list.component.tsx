import React from 'react';

import TodoListItem, {TodoListItemProps} from '../todo-list-item/todo-list-item.component';

import './todo-list.style.scss';
import EmptyBox from '../empty-box/empty-box.component';

interface TodoListProps {
  todos: TodoListItemProps[],
  toggler: (id: string) => void,
  remover: (id: string) => void,
}

export default function TodoList({ todos, toggler, remover }: TodoListProps) {
  return (
    <ul className="todoList">
      {todos.length === 0 ? (
        <EmptyBox/>
      ) : (
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            {...todo}
            toggler={toggler}
            remover={remover}
          />
        ))
      )}
    </ul>
  );
}
