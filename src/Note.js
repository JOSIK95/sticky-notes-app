import React from "react";

const note = (props) => {
  const updateTitle = (e) => {
    const updatedvalue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "title", updatedvalue);
  };

  const updateDescription = (e) => {
    const updatedvalue = e.target.value;
    const editMeId = props.note.id;
    props.onType(editMeId, "description", updatedvalue);
  };

  const clickDelete = () => {
    props.removeNote(props.note.id);
  };

  return (
    <li className="note">
      {console.log(props.note)}
      <input
        className="note__title"
        type="text"
        placeholder="Title"
        value={props.note.title}
        onChange={updateTitle}
      />
      <textarea
        className="note__description"
        placeholder="Description..."
        value={props.note.description}
        onChange={updateDescription}
      />
      <span className="note__delete" onClick={clickDelete}>
        X
      </span>
    </li>
  );
};

export default note;
