import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleData(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.onAdd(note);
          setNote({
            title: "",
            content: "",
          });
        }}
      >
        {isExpanded ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleData}
            value={note.title}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleData}
          value={note.content}
          onClick={() => {
            setIsExpanded((prevValue) => {
              return !prevValue;
            });
          }}
        />
        <Zoom in={isExpanded}>
          <button>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}
