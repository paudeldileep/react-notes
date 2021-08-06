import { useState } from "react";
import { useDispatch } from "react-redux";

const NoteBox = () => {
  const [newNote, setNewNote] = useState("");
  
  const dispatch=useDispatch();
  

  const handleChange = (event) => {
    setNewNote(event.target.value);
    
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    //call action creator , save new note
    dispatch({type:'ADD',payload:newNote});
    //empty the text area
    setNewNote("");
  }

  return (
    <div className="flex w-full h-28 px-3 py-2 justify-center my-4">
      <form className="px-2 py-1 w-full md:w-3/4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full my-1 px-2 h-20 focus:outline-none focus-within:ring-1 focus-within:ring-green-600"
          placeholder="Enter Note.."
          onChange={handleChange}
          value={newNote}
        />
        <button type="submit" className="w-full my-2 btn btn-submit">Add Note</button>
      </form>
    </div>
  );
};

export default NoteBox;
