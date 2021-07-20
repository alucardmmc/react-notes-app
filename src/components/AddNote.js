import { useState } from 'react';
import classes from './AddNote.module.css';
import Card from './ui/Card';

const AddNote = ({ handleSaveNote }) => {
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const handleTextChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  }

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleSaveNote(noteText);
      setNoteText('');
    }
  }

  return (
    <Card className={classes['note--new']}>
      <textarea
        className={classes['note__textarea']}
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
        value={noteText}
        onChange={handleTextChange}
      ></textarea>
      <div className={classes['note__footer']}>
        <small>{characterLimit - noteText.length} remaining</small>
        <button className={classes['button--save']} onClick={handleSaveClick}>Save</button>
      </div>
    </Card>
  );
};

export default AddNote;
