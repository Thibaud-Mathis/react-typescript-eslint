import React, { useState, ChangeEvent } from 'react';

export interface ToDoInputProps {
  addNote(note: string): void;
}

export const ToDoInput: React.FC<ToDoInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState('');

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote('');
  };
  return (
    <div>
      <input
        onChange={updateNote}
        value={note}
        type="text"
        name="note"
        placeholder="Notes..."
      />
      <button onClick={onAddNoteClick} type="button">
        Add note
      </button>
    </div>
  );
};
