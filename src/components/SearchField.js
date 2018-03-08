import React from "react";

function SearchField({ enteredWord, searchImage, enteredWordHandler, clearSearch }) {
	return (
		<div className="flex-container">
			<div className="w-80">
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
					<span className="clickable clear" onClick={clearSearch}>
						Clear
					</span>
				</form>
			</div>
		</div>
	);
}

export default SearchField;
