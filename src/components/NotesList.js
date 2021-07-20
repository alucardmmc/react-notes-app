import AddNote from './AddNote';
import Note from './Note';

import classes from './NotesList.module.css';

const NotesList = ({ notes, saveNote }) => {
  return (
    <div className={classes['notes-list']}>
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote saveNoteHandler={saveNote} />
    </div>
  );
};

export default NotesList;
