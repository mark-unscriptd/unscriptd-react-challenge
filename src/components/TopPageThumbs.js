import { Link } from "react-router-dom";

function TopPageThumbs({ data, enteredWord, searchImage, enteredWordHandler, clearSearch }) {
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
						<span className="cursor clear" onClick={clearSearch}>
							Clear
						</span>
					</form>
				</div>
            
            {/* show thumbnails */}
				{data.map(data => {
					return (
						<Link to={`/${data.id}`} key={data.id}>
							<img
								className="thumb"
								title={data.title}
								src={data.display_sizes[2].uri}
								alt={data.artist}
								key={data.id}
							/>
						</Link>
					);
            })}
            
			</div>
		)
	);
}

export default TopPageThumbs;
