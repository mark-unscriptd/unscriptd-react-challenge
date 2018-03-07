import React, { Fragment } from "react";

function PhotoDetails({ data, onClickSave, showEditForm }) {
	let id = data.id;
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
                  id="edit-link"
						className="cursor"
						onClick={() => {
							showEditForm();
						}}
					>
						[Edit]
					</span>

					<div id="form" className="hidden">
						<h2>Edit data</h2>
						<form
							onSubmit={event => {
								event.preventDefault();

								const form = event.target;
								const elements = form.elements;
								const title = elements.title.value;
								const caption = elements.caption.value;

                        onClickSave({ title, caption, id });
                        showEditForm()
							}}
						>
							<div className="editfield">
								<label>Title</label>
								<input type="text" name="title" className="mb-2" defaultValue={data.title} />
								<label>Caption</label>
								<textarea className="mb-2" name="caption" defaultValue={data.caption} />
							</div>
							<button className="mb-2">Save changes</button>
						</form>
					</div>
				</div>
			</Fragment>
		)
	);
}

export default PhotoDetails;
