import React from "react";
import { Link } from "react-router-dom";

function TopPageThumbs({
	data,
	selectedPhotos,
	enteredWord,
	searchImage,
	enteredWordHandler,
	clearSearch,
   toggleTick,
   deletePhotos
}) {
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
						<div className="thumb-wrapper" key={`div_${data.id}`}>
							<input
								type="checkbox"
								name={data.id}
								value={data.id}
								onChange={toggleTick}
								key={`input_${data.id}`}
							/>
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

            {/* Delete Button */}
				<button className="w-80" id="delete-button" onClick={deletePhotos}>
					Delete photos
				</button>
			</div>
		)
	);
}

export default TopPageThumbs;
