import { MdDeleteForever } from 'react-icons/md';

import classes from './Note.module.css';
import Card from './ui/Card';

const Note = ({ id, text, date }) => {
  return (
    <Card className={classes['note--created']}>
      <span>{text}</span>
      <div className={classes['note__footer']}>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </Card>
  );
};

export default Note;
