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
  console.log(notesList)
  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => (
          <Note note={noteItem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
