import { useState } from "react";

const NoteBox = () => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
    
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    //call action creator , save new note

    //empty the text area
    setNewNote("");
  }

  return (
    <div className="flex w-full h-28 px-3 py-2 justify-center my-4">
      <form className="px-2 py-1 w-full md:w-3/4" onSubmit={handleSubmit}>
        <textarea
          className="w-full my-1 px-2 py-1 h-20 focus:outline-none"
          placeholder="Enter Note.."
          onChange={handleChange}
          value={newNote}
        ></textarea>
        <button className="w-full my-2 btn btn-submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteBox;
