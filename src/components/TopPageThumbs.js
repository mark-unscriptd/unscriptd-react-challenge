import React from "react";
import { Link } from "react-router-dom";

function TopPageThumbs({
	data,
	selectedPhotos,
	enteredWord,
	searchImage,
	enteredWordHandler,
	clearSearch,
	toggleTick
}) {
   
   const filterItems = (query) => {
      return selectedPhotos.filter((el) =>
        el.indexOf(query) > -1
      );
    }
   
   return (
		data && (
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

				{/* show thumbnails */}
				{data.map(data => {
					return (
						<div>
							<span className="clickable" onClick={() => toggleTick(data.id)}>
                     ⚪️
								{/* {m.completed ? (
								) : (
									<i className="glyphicon icon-checkbox-unchecked" />
								)} */}
							</span>
							<Link to={`/${data.id}`} key={data.id}>
								<img
									className="thumb"
									title={data.title}
									src={data.display_sizes[2].uri}
									alt={data.artist}
									key={data.id}
								/>
							</Link>
						</div>
					);
				})}
			</div>
		)
	);
}

export default TopPageThumbs;
