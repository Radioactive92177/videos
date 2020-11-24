import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState(""); //* For search term

  //? For handling inputs
  const onInputChange = (e) => {
    e.preventDefault();
    setTerm(e.target.value);
  };

  //? Passing the term back to the App component
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(term);
  };

  return (
    <>
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={term} onChange={onInputChange} />
          </div>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
