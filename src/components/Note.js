import { MdDeleteForever } from 'react-icons/md';

import classes from './Note.module.css';
import Card from './ui/Card';

const Note = ({ id, text, date, handleDeleteNote }) => {
  const handleDeleteIconClick = () => {
    handleDeleteNote(id);
  };

  return (
    <Card className={classes['note--created']}>
      <span>{text}</span>
      <div className={classes['note__footer']}>
        <small>{date}</small>
        <MdDeleteForever
          className={classes['delete-icon']}
          size='1.3em'
          onClick={handleDeleteIconClick}
        />
      </div>
    </Card>
  );
};

export default Note;
