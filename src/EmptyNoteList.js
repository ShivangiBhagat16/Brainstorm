import AddNote from "./AddNote";

function EmptyNodeList() {
  return (
    <div className="inner-container">
      <h2 className="mb-5 text-3xl text-[#b0b0b0]">Add your first note.</h2>
      <AddNote />
    </div>
  );
}

export default EmptyNodeList;
