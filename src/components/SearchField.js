import React from "react";

function SearchField({ enteredWord, searchImage, enteredWordHandler, clearSearch }) {
  return (
    <div className="search-component">
      <form
        onSubmit={event => {
          event.preventDefault();
          searchImage();
        }}
      >
        <input
          type="text"
          id="search-field"
          placeholder="search caption"
          defaultValue={enteredWord}
          onChange={enteredWordHandler}
        />
        <button onClick={searchImage}>Search</button>
        <p className="clickable clear" onClick={clearSearch}>
          Clear
        </p>
      </form>
    </div>
  );
}

export default SearchField;
