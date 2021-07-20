import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import classes from './App.module.css';
import Search from './components/Search';

const initialValue = [
  {
    id: nanoid(),
    text: 'My First Note!',
    date: '07/01/2021',
  },
  {
    id: nanoid(),
    text: 'This is my second Note!',
    date: '07/05/2021',
  },
  {
    id: nanoid(),
    text: 'This is my thid Note!',
    date: '07/20/2021',
  },
];

const App = () => {
  const [notes, setNotes] = useState(initialValue);
  const [searchText, setSearchText] = useState('');

  const saveNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={classes['container']}>
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleSaveNote={saveNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
