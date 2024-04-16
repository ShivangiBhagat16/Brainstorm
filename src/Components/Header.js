import React from "react";
import AddNote from "./AddNote";

function Header() {
  return (
    <React.Fragment>
      <div className="inner-container mb-5 flex justify-between">
        <h1 className="text-5xl font-bold text-dark-grey">Notes</h1>
        <AddNote />
      </div>
      <div className="container">
        <h3 className="search-bar relative mb-8 grid grid-cols-12">
          <button className="col-span-1 m-auto">
            <img src="assets/search.svg" alt="Search" />
          </button>
          <input
            type="textbox"
            placeholder="Search through your Notes"
            className="color-base col-span-10 text-2xl italic"
          />
        </h3>
      </div>
    </React.Fragment>
  );
}

export default Header;
