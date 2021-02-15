import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToDoInput } from './ToDoInput';
import { NotesState } from '../../reducers';
import { addNote } from '../../actions';

const Todo = () => {
  const notes = useSelector<NotesState, NotesState['notes']>(
    (state) => state.notes
  );
  const distpatch = useDispatch();

  const onAddNote = (note: string) => {
    distpatch(addNote(note));
  };

  return (
    <>
      <ToDoInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
