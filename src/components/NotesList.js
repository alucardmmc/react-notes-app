import AddNote from './AddNote';
import Note from './Note';

import classes from './NotesList.module.css';

const NotesList = ({ notes }) => {
  return (
    <div className={classes['notes-list']}>
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} />
      ))}
      <AddNote />
    </div>
  );
};

export default NotesList;
