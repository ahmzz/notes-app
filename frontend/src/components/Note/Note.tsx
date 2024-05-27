import React, { FC, FocusEvent } from "react";
import INote from "../../interfaces/note.interface";
import "./Note.css";
type Props = {
  note: INote;
  onNoteUpdate: (note: INote) => void;
};

const Note: FC<Props> = ({ note, onNoteUpdate }) => {
  const noteNoteUpdate = (event: FocusEvent<HTMLDivElement>) => {
    const updatedNote: INote = {
      ...note,
      text: event.currentTarget.textContent || "",
    };
    onNoteUpdate(updatedNote);
  };
  return (
    <div className="note">
      <div
        onBlur={noteNoteUpdate}
        className="note__text"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {note.text}
      </div>
      <div className="note__link">
        <a href={note.link}>{note.link}</a>
      </div>
    </div>
  );
};

export default Note;
