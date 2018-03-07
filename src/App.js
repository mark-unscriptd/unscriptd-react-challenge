import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { listPhotos, updatePhoto, searchPhotoByCaption } from "./api/Photos";
import PhotoDetails from "./components/PhotoDetails";
import TopPageThumbs from "./components/TopPageThumbs";

class App extends Component {
	state = {
		error: null,
		enteredWord: "",
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

	showEditForm = () => {
		let toggle = document.getElementById("form");
		toggle.className = toggle.className === "hidden" ? "" : "hidden";
	};

	enteredWordHandler = event => {
		const input = event.target.value;
		this.setState({ enteredWord: input });
	};

	searchImage = () => {
		let { enteredWord } = this.state;
		searchPhotoByCaption(enteredWord).then(res => {
			this.setState({ data: res });
      })
      ;
   };
   
   clearSearch = () => {
		searchPhotoByCaption('').then(res => {
			this.setState({ data: res });
      })
      ;
   }

	render() {
		const { data, error, enteredWord } = this.state;
		return (
			<Router>
				<div className="App">
					<header className="header">
						<Link to="/">
							<h1 className="h1 text-center">My awesome moments</h1>
						</Link>
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
										render={() => (
											<PhotoDetails
												data={data}
												onClickSave={this.onClickSave}
												showEditForm={this.showEditForm}
											/>
										)}
									/>
								);
							})}

						<Route
							path="/"
							exact
							render={() => (
								<Fragment>
                           <TopPageThumbs data={data}
                            enteredWord={this.enteredWord} searchImage={this.searchImage}
                            enteredWordHandler={this.enteredWordHandler} clearSearch={this.clearSearch}
                            />
								</Fragment>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
