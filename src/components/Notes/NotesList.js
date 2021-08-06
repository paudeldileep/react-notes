import { useDispatch, useSelector } from "react-redux";

const NotesList = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch=useDispatch();

  const noNotesMessage = "No notes Found! Add some..";

  const removeNote=(index)=>{
    dispatch({type:'DELETE',payload:index});
  }
  

  return (
    <div className="my-6 py-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
      {notes.length !== 0 ? (
        notes.map((note, index) => (
          <div
            key={index}
            className="border border-gray-400 bg-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-70 py-0 px-2 h-32 rounded-md text-left"
          >
            <div className="flex justify-end">
              <span className="rounded-ful w-5 h-5 text-center font-mono font-bold text-red-600"><button onClick={()=>removeNote(index)}>x</button></span>
            </div>
            <p className="font-mono font-semibold text-gray-600 pl-1 mt-1">{note}</p>
          </div>
        ))
      ) : (
        <p className="font-mono font-semibold text-gray-100">
          {noNotesMessage}
        </p>
      )}
    </div>
  );
};

export default NotesList;
