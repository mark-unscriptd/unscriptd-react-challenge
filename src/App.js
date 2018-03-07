import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { listPhotos, updatePhoto } from "./api/Photos";
import { Search } from "./components/Svg";
import PhotoDetails from "./components/PhotoDetails";

class App extends Component {
	state = {
		error: null,
		data: null
	};

	componentDidMount() {
		listPhotos()
			.then(data => {
				this.setState({ data });
			})
			.catch(error => {
				this.setState({ error });
			});
	}

	onClickSave = editedPhotoData => {
		updatePhoto(editedPhotoData.id, editedPhotoData)
			.then(updatedPhoto => {
				this.setState(prevState => {
					const newData = prevState.data.map(m => {
						if (m.id === updatedPhoto.id) {
							return updatedPhoto;
						} else {
							return m;
						}
					});
					return {
						data: newData
					};
				});
			})
			.catch(error => {
				this.setState({ error });
			});
	};

	render() {
		const { data, error } = this.state;
		return (
			<Router>
				<div className="App">
					<header className="header">
						<Link to="/">
							<h1 className="h1 text-center">My awesome moments</h1>
						</Link>
						<input type="text" placeholder="search" />
						<Search />
					</header>

					{/* loading error message */}
					{error && <h2 id="error">{error.message}</h2>}

					<Switch>
						{data &&
							data.map(data => {
								return (
									<Route
										key={data.id}
										path={`/${data.id}`}
										exact
										render={() => <PhotoDetails data={data} onClickSave={this.onClickSave} />}
									/>
								);
							})}

						<Route
							path="/"
							exact
							render={() => (
								<div className="flex-container">
									{data &&
										data.map(data => {
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
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
