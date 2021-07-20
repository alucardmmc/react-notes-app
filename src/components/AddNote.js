import { useState } from 'react';
import classes from './AddNote.module.css';
import Card from './ui/Card';

const AddNote = ({ saveNoteHandler }) => {
  const [noteText, setNoteText] = useState('');

  const textChangeHandler = (event) => {
    setNoteText(event.target.value);
  }

  const buttonSaveHandler = () => {
    saveNoteHandler(noteText);
  }

  return (
    <Card className={classes['note--new']}>
      <textarea
        className={classes['note__textarea']}
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={textChangeHandler}
      ></textarea>
      <div className={classes['note__footer']}>
        <small>200 remaining</small>
        <button className={classes['button--save']} onClick={buttonSaveHandler}>Save</button>
      </div>
    </Card>
  );
};

export default AddNote;
