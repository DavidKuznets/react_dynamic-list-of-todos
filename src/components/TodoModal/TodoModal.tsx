import React from 'react';
import { Todo } from '../../types/Todo'; // Імпортуємо тип Todo

interface TodoModalProps {
  todo: Todo;
  closeModal: () => void;
}

export const TodoModal: React.FC<TodoModalProps> = ({ todo, closeModal }) => {
  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">{todo.title}</div>
          <button type="button" className="delete" onClick={closeModal} />
        </header>

        <div className="modal-card-body">
          <p className="block">{todo.title}</p>
          <p className="block">
            {todo.completed ? 'Completed' : 'Not completed'}
          </p>
        </div>
      </div>
    </div>
  );
};
