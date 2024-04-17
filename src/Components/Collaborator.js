function Collaborator({
  collaborator,
  addedCollaboratorHandle,
  changeCollaboratorRole,
  activeCollaborator,
}) {
  return (
    <li key={collaborator.id} className="flex gap-3">
      <div
        className="w-[60px] flex-none cursor-pointer"
        onClick={() => {
          activeCollaborator(collaborator.id);
          addedCollaboratorHandle(
            collaborator.id,
            collaborator.addedAsCollaborator,
          );
        }}
      >
        <img
          src="assets/collaborator-img.png"
          alt={collaborator.name}
          className={`rounded-full ${collaborator.addedAsCollaborator ? "active" : "noactive"}`}
        />
      </div>
      <div className="w-9/12 flex-auto">
        <h3 className="text-2xl text-[#a09f9f]">{collaborator.name}</h3>
        <h5 className="text-lg text-[#a09f9f]">{collaborator.position}</h5>
      </div>
      <div className="flex flex-auto items-center text-right text-lg">
        <select
          className="text-right"
          value={collaborator.role}
          onChange={(e) => {
            changeCollaboratorRole(e.target.value, collaborator.id);
          }}
        >
          <option value="Collaborator" key={collaborator.id + 1}>
            Collaborator
          </option>
          <option value="Conributor" key={collaborator.id + 2}>
            Conributor
          </option>
          <option value="Observor" key={collaborator.id + 3}>
            Observor
          </option>
        </select>
      </div>
    </li>
  );
}

export default Collaborator;
