
import './App.css';
import NoteBox from './components/Notes/NoteBox';
import NotesList from './components/Notes/NotesList';

function App() {
  return (
    <div className="App w-full min-h-screen bg-gray-300">
      <div className="h-14"></div>
      <div className="box bg-gray-100 mt-10 pb-6">
       <NoteBox/>
       </div>
       <div className="box bg-gradient-to-br from-green-300 to-green-600 mt-4 px-4">
       <NotesList/>
       </div>
    </div>
  );
}

export default App;
