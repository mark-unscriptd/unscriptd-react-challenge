import React, { Fragment } from "react";

function PhotoDetails({ data, onClickSave }) {
	return (
		data && (
			<Fragment>
				<figure style={{ textAlign: "center" }}>
					<img className="large" src={data.display_sizes[0].uri} alt={data.artist} key={data.id} />
				</figure>
				<div className="info-container">
					<table>
						<tbody>
							<tr>
								<td>
									<p>Title</p>
								</td>
								<td>
									<p>{data.title}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Caption</p>
								</td>
								<td>
									<p>{data.caption}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Artist</p>
								</td>
								<td>
									<p>{data.artist}</p>
								</td>
							</tr>
						</tbody>
					</table>

					<span
						className="cursor"
						onClick={() => {
							alert("hey");
						}}
					>
						[Edit]
					</span>

					<h2>Edit data</h2>
					<form
						onSubmit={event => {
							event.preventDefault();

							const form = event.target;
							const elements = form.elements;
							const title = elements.title.value;
							const caption = elements.caption.value;

							console.log(title, caption);

							// onClickSave({ title, caption });
						}}
					>
						<div className="editfield">
							<label>Title</label>
							<input type="text" name="title" className="mb-2" defaultValue={data.title} />
							<label>Caption</label>
							<textarea className="mb-2" name="caption" defaultValue={data.caption} />
							<label>Artist</label>
							<input type="text" className="mb-2" name="artist" defaultValue={data.artist} />
						</div>
						<button className="btn btn-info">Save changes</button>
					</form>
				</div>
			</Fragment>
		)
	);
}

export default PhotoDetails;
