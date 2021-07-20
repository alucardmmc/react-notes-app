import { MdDeleteForever } from 'react-icons/md';

import classes from './Note.module.css';

const Note = ({ id, text, date }) => {
  return (
    <div className={classes.note}>
      <span>{text}</span>
      <div className={classes['note-footer']}>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};

export default Note;
