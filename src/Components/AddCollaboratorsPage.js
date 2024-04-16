import AddedCollaborators from "./AddedCollaborators";
import CollaboratorsList from "./CollaboratorsList";

function AddCollaboratorsPage({
  collaborators,
  addedColoborators,
  changeCollaboratorRole,
  addedCollaboratorHandle,
  customClassGoBackToAddCollaborator,
  setInviteWithMsg,
  handleInvite,
}) {
  return (
    <div className="inner-container">
      <h3 className="search-bar relative mb-8">
        <span className="inline-block w-[50px] align-middle">
          <button>
            <img src="assets/search.svg" alt="Search" />
          </button>
        </span>
        <input
          type="textbox"
          placeholder="Search for potential collaborators"
          className="color-base border-0 text-2xl italic"
        />
      </h3>
      <CollaboratorsList
        collaborators={collaborators}
        addedCollaboratorHandle={addedCollaboratorHandle}
        changeCollaboratorRole={changeCollaboratorRole}
      />
      <AddedCollaborators
        addedColoborators={addedColoborators}
        customClassGoBackToAddCollaborator="hidden"
        setInviteWithMsg={setInviteWithMsg}
        handleInvite={handleInvite}
      />
    </div>
  );
}

export default AddCollaboratorsPage;
