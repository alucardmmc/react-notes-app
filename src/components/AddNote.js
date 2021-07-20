import classes from './AddNote.module.css';
import Card from './ui/Card';

const AddNote = () => {
  return (
    <Card className={classes['note--new']}>
      <textarea
        className={classes['note__textarea']}
        rows='8'
        cols='10'
        placeholder='Type to add a note...'
      ></textarea>
      <div className={classes['note__footer']}>
        <small>200 remaining</small>
        <button className={classes['button--save']}>Save</button>
      </div>
    </Card>
  );
};

export default AddNote;
