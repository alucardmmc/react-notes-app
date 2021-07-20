import NotesList from './components/NotesList';

import classes from './App.module.css';

const App = () => {
  return (
    <div className={classes['container']}>
      <NotesList />
    </div>
  );
};

export default App;
