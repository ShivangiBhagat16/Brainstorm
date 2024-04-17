import Collaborator from "./Collaborator";

function CollaboratorsList({
  collaborators,
  addedCollaboratorHandle,
  changeCollaboratorRole,
  activeCollaborator,
}) {
  return (
    <ul className="border-b-1 collaborators-list relative mb-5 flex flex-col gap-10 border-b border-[#e9e9e9] pb-10">
      {collaborators.map((collaborator) => {
        return (
          <Collaborator
            collaborator={collaborator}
            addedCollaboratorHandle={addedCollaboratorHandle}
            changeCollaboratorRole={changeCollaboratorRole}
            activeCollaborator={activeCollaborator}
            key={collaborator.id}
          />
        );
      })}
    </ul>
  );
}

export default CollaboratorsList;
