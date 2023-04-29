import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  return (
    <div className="note" key={props.id}>
      <h1 className="noteTitle">{props.title}</h1>
      <p className="noteContent">{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
