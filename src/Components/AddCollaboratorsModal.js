import React, { useState } from "react";
import "./Modal/modal.css";
import Modal from "./Modal/Modal";
import InvitesSent from "./InvitesSent";
import AddCollaboratorsPage from "./AddCollaboratorsPage";
import InviteWithMsg from "./InviteWithMsg";

const collaboratorsData = [
  {
    name: "Salvadore Dali",
    position: "Leading contributor on Surrealism.",
    role: "Collaborator",
    id: "1",
    addedAsCollaborator: false,
  },
  {
    name: "Andre Breton",
    position: "Founder of the Dadaist Movement.",
    role: "Collaborator",
    id: "2",
    addedAsCollaborator: false,
  },
  {
    name: "Rene Magritte",
    position: "Ceci n’est pas un artiste",
    role: "Collaborator",
    id: "3",
    addedAsCollaborator: false,
  },
  {
    name: "Max Ernst",
    position: "The Elephant in the Room",
    role: "Collaborator",
    id: "4",
    addedAsCollaborator: false,
  },
];

function AddCollaborators({ toggleModal }) {
  const [collaborators, setCollaborators] = useState(collaboratorsData);
  const [addedColoborators, setAddedCollaborators] = useState([]);
  const [invite, setInvite] = useState(false);
  const [addMoreCollaborators, setAddMoreCollaborators] = useState(false);
  const [inviteWithMsg, setInviteWithMsg] = useState(false);
  const [message, setMessage] = useState("");

  function changeCollaboratorRole(val, id) {
    const objIndex = collaborators.findIndex(
      (collaborator) => collaborator.id == id,
    );
    collaborators[objIndex].role = val;
    setCollaborators([...collaborators]);
  }

  function addedCollaboratorHandle(id, status) {
    const objIndex = collaborators.findIndex(
      (collaborator) => collaborator.id == id,
    );
    const addedAsCollaborator = collaborators[objIndex].addedAsCollaborator;
    collaborators[objIndex].addedAsCollaborator = !addedAsCollaborator;
    setCollaborators([...collaborators]);

    const addedColoborators = setAddedCollaborators(
      collaborators.filter((c) => c.addedAsCollaborator === true),
    );
  }

  function handleInvite() {
    setInvite((invite) => !invite);
  }

  function addMoreCollaboratorsFromMsg() {
    setInviteWithMsg((msg) => !msg);
  }

  function activeCollaborator(id) {
    var selectedId = collaborators.filter((c) => c.id === id);
    selectedId.addedAsCollaborator = !selectedId.addedAsCollaborator;
    setCollaborators([...collaborators]);
  }

  function resetAll() {
    collaborators.map((c) => (c.addedAsCollaborator = false));
    setCollaborators([...collaborators]);
    setAddedCollaborators([]);
    setInvite(false);
    setInviteWithMsg(false);
    setAddMoreCollaborators(false);
    setMessage("");
  }

  return (
    <React.Fragment>
      <Modal toggleModal={toggleModal} resetAll={resetAll}>
        {(!invite && !inviteWithMsg) || addMoreCollaborators ? (
          <AddCollaboratorsPage
            collaborators={collaborators}
            addedColoborators={addedColoborators}
            changeCollaboratorRole={changeCollaboratorRole}
            addedCollaboratorHandle={addedCollaboratorHandle}
            toggleModal={toggleModal}
            customClassGoBackToAddCollaborator="hidden"
            setInviteWithMsg={setInviteWithMsg}
            handleInvite={handleInvite}
            activeCollaborator={activeCollaborator}
          />
        ) : invite ? (
          <InvitesSent resetAll={resetAll} />
        ) : (
          inviteWithMsg && (
            <InviteWithMsg
              addedColoborators={addedColoborators}
              handleInvite={handleInvite}
              addMoreCollaboratorsFromMsg={addMoreCollaboratorsFromMsg}
              customClassGoBackToAddCollaborator="text-[#a8a8a8] mt-8"
              message={message}
              setMessage={setMessage}
            />
          )
        )}
      </Modal>
    </React.Fragment>
  );
}

export default AddCollaborators;
