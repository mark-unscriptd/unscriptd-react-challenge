import React, { Fragment } from "react";

function PhotoDetails({ data }) {
	return (
      data && (
		<Fragment>
			<figure style={{ textAlign: "center" }}>
				<img className="large" src={data.display_sizes[0].uri} alt={data.artist} key={data.id} />
			</figure>
			<div className="info-container">
				<table>
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
				</table>

				<span
					className="cursor"
					onClick={() => {
						alert("hey");
					}}
				>
					[Edit]
				</span>

				<div className="editfield">
					<h2>Edit data</h2>
					<p>Title</p>
					<input type="text" className="mb-2" defaultValue={data.title} />
					<p>Caption</p>
					<textarea className="mb-2" defaultValue={data.caption} />
					<p>Artist</p>
					<input type="text" className="mb-2" defaultValue={data.artist} />
				</div>
			</div>
		</Fragment>
      )
	);
}

export default PhotoDetails;
