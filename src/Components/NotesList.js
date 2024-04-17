import Note from "./Note";

function NotesList({ notes, onHandleDelete, onHandlePin }) {
  return (
    <ul className="notes-list flex h-[510px] flex-col gap-9 overflow-auto ps-[50px]">
      {notes.map((note) => (
        <Note
          note={note}
          onHandleDelete={onHandleDelete}
          onHandlePin={onHandlePin}
          key={note.id}
        />
      ))}
    </ul>
  );
}

export default NotesList;
