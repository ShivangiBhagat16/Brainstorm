function AddedCollaborators({
  addedColoborators,
  customClassGoBackToAddCollaborator,
  setInviteWithMsg,
  handleInvite,
  customClassName,
  addMoreCollaboratorsFromMsg,
}) {
  return (
    <div className="added-collaborators relative">
      <div className="flex justify-between">
        <div className="col-span-6">
          <ul className="flex">
            {addedColoborators !== undefined &&
              addedColoborators.map((c) => (
                <li className="-ms-2.5 first:ms-0" key={c.id}>
                  <img
                    src="assets/collaborator-img.png"
                    alt={c.name}
                    className="rounded-full outline outline-[3px] outline-offset-[-3px] outline-[#6ccb69]"
                  />
                </li>
              ))}
          </ul>

          <h6
            className={`mt-4 cursor-pointer text-lg text-[#4484a8] ${customClassGoBackToAddCollaborator}`}
            onClick={addMoreCollaboratorsFromMsg}
          >
            Go Back to Add Collaborators
          </h6>
        </div>
        <div className="col-span-6 text-right">
          <button
            className="rounded-lg border border-[#4484a8] px-16 py-3.5 text-2xl uppercase text-[#4484a8] transition-all hover:bg-[#4484a8] hover:text-[#fff]"
            onClick={handleInvite}
          >
            INVITE
          </button>
          <h6
            className={`mt-4 cursor-pointer text-lg text-[#4484a8] ${customClassName}`}
            onClick={() => setInviteWithMsg((msg) => !msg)}
          >
            Invite with personal message
          </h6>
        </div>
      </div>
    </div>
  );
}

export default AddedCollaborators;
