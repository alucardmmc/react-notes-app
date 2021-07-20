import { MdDeleteForever } from 'react-icons/md';

import classes from './Note.module.css';

const Note = () => {
  return (
    <div className={classes.note}>
      <span>Hello! This is our first note!</span>
      <div className={classes['note-footer']}>
        <small>13/04/2021</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};

export default Note;
