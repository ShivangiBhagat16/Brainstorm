import { useState } from "react";

function Note({ note, onHandleDelete, onHandlePin }) {
  const [showPin, setShowPin] = useState(false);

  return (
    <li
      key={note.id}
      className="group/notelist notelist relative grid cursor-pointer grid-cols-12 items-start"
    >
      <button
        className={
          (showPin ? "visible" : "invisible") +
          " col-span-1 flex h-full items-start pt-1.5 hover:transition-all group-hover/notelist:visible"
        }
        onClick={() => {
          setShowPin(!showPin);
          onHandlePin(note.id);
        }}
      >
        {showPin ? (
          <img src="assets/blue pin.svg" alt="Pin" />
        ) : (
          <img src="assets/pin black.svg" alt="Pin" className="opacity-[.18]" />
        )}
      </button>
      <div className="col-span-10 w-[700px]">
        <h1 className="text-heading line-h mb-3 w-3/4 text-[27px] font-bold leading-9">
          {note.heading}
        </h1>
        <div className="flex justify-between">
          <h1 className="founder relative ps-11 text-lg text-[#bbb]">
            {note.founder}
          </h1>
          <p className="text-sm italic leading-9 text-[#bbb]">
            {note.duration}
          </p>
        </div>
      </div>
      <button
        className="invisible col-span-1 ms-auto pt-1.5 group-hover/notelist:visible"
        onClick={() => onHandleDelete(note.id)}
      >
        <img src="assets/delete.svg" alt="Pin" />
      </button>
    </li>
  );
}

export default Note;
