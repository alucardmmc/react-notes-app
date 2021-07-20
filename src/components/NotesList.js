import AddNote from './AddNote';
import Note from './Note';

import classes from './NotesList.module.css';

const NotesList = ({ notes, handleSaveNote, handleDeleteNote }) => {
  return (
    <div className={classes['notes-list']}>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleSaveNote={handleSaveNote} />
    </div>
  );
};

export default NotesList;
