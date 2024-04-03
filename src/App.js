import { useState } from "react";
import "./App.css";
import Header from "./Header";
import NotesList from "./NotesList";
import EmptyNoteList from "./EmptyNoteList";

const initialNotes = [
  {
    heading:
      "Introduction of Large Language Models and Retrieval Augmented Generation",
    founder: "Roger Craig and Shakeel Avadhany",
    duration: "2 mins ago",
    id: "1",
    isPinned: false,
    dateTitme: Date.now() - 120,
  },
  {
    heading: "Always Look on the Bright Side of Life",
    founder: "Mick Zomnir",
    duration: "yesterday",
    id: "2",
    isPinned: false,
    dateTitme: Date.now() - 86400,
  },
  {
    heading: "And Now for Something Completely Different",
    founder: "Add Collaborators",
    duration: "a week ago",
    id: "3",
    isPinned: false,
    dateTitme: Date.now() - 604800,
  },
  {
    heading: "Large Language Models and Retrieval Augmented Generation",
    founder: "Roger Craig and Shakeel Avadhany",
    duration: "5 mins ago",
    id: "4",
    isPinned: false,
    dateTitme: Date.now() - 300,
  },
  {
    heading: "Look on the Bright Side of Life",
    founder: "Mick Zomnir",
    duration: "40 mins ago",
    id: "5",
    isPinned: false,
    dateTitme: Date.now() - 2400,
  },
  {
    heading: "Something Completely Different",
    founder: "Add Collaborators",
    duration: "a week ago",
    id: "6",
    isPinned: false,
    dateTitme: Date.now() - 604800,
  },
];

function App() {
  const [notes, setNotes] = useState(initialNotes);

  function handlePin(id) {
    const objIndex = notes.findIndex((note) => note.id == id);
    const isPinned = notes[objIndex].isPinned;
    notes[objIndex].isPinned = !isPinned;
    setNotes([...notes]);
  }

  notes.sort(function (a, b) {
    return b.isPinned - a.isPinned || b.dateTitme - a.dateTitme;
  });

  function handleDelete(id) {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  return (
    <div className="notes relative flex">
      <div className="main-container">
        <Header />
        {!notes.length ? (
          <EmptyNoteList />
        ) : (
          <NotesList
            notes={notes}
            onHandleDelete={handleDelete}
            onHandlePin={handlePin}
          />
        )}
      </div>
    </div>
  );
}

export default App;
