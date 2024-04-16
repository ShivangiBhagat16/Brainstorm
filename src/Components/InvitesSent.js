function InvitesSent({ addMoreCollaboratorsFromInvites }) {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center">
      <img src="assets/send.png" alt="Send" className="mx-auto" />
      <h6 className="mb-4 mt-16 text-2xl text-[#9a9a9a]">
        Your invites have been sent
      </h6>

      <h6
        className="cursor-pointer text-2xl text-[#005a8e]"
        onClick={addMoreCollaboratorsFromInvites}
      >
        Add more collaborators
      </h6>
    </div>
  );
}

export default InvitesSent;
