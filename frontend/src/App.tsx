import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import INote from "./interfaces/note.interface";
import DUMMY_NOTES from "./test_data/dummy_notes";
import Note from "./components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([]);

  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, [notesList]);

  const updateNoteItem = (updatedNote: INote) => {
    const updateList = notesList.map((note: INote) => {
      if (note._id === updatedNote._id) return updatedNote;
      else return note;
    });

    setNotesList(updateList);
  };

  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => (
          <Note note={noteItem} onNoteUpdate={updateNoteItem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
