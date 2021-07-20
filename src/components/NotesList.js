import Note from './Note';

import classes from './NotesList.module.css';

const NotesList = () => {
  return (
    <div className={classes['notes-list']}>
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NotesList;
