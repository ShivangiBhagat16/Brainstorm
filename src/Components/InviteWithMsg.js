import AddedCollaborators from "./AddedCollaborators";

function InviteWithMsg({
  addedColoborators,
  handleInvite,
  addMoreCollaboratorsFromMsg,
  customClassGoBackToAddCollaborator,
  message,
  setMessage,
}) {
  return (
    <div className="inner-container">
      <div className="write-msg relative mb-5 border-b border-[#e9e9e9] pb-10">
        <textarea
          placeholder="Write a message here... "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-[410px] border-0 text-2xl text-[#666]"
        />
      </div>
      <AddedCollaborators
        addedColoborators={addedColoborators}
        customClassName="hidden"
        handleInvite={handleInvite}
        addMoreCollaboratorsFromMsg={addMoreCollaboratorsFromMsg}
        customClassGoBackToAddCollaborator={customClassGoBackToAddCollaborator}
      />
    </div>
  );
}

export default InviteWithMsg;
