import React, { useState } from "react";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
import noteList from "../notes";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState(noteList);
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    noteList = [...noteList, note];
  }

  function deleteNote(id) {
    setNotes(() => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="app">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}
