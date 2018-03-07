import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { listPhotos } from "./api/Photos";
import { Search } from "./components/Svg";
import PhotoDetails from './components/PhotoDetails'

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

	render() {
		const { data, error } = this.state;
		return (
			<Router>
				<div className="App">
					<header className="header">
						<Link to="/">
							<h1 className="h1 text-center">Welcome to the World of Patrick Smith</h1>
						</Link>
						<input type="text" placeholder="search" />
						<Search />
					</header>

					{/* loading error message */}
					{error && <h2 id="error">Error loding images! {error.message}</h2>}

					<Switch>
						{data &&
							data.map(m => {
								return (
									<Route
										path={`/${m.id}`}
										exact
										render={() => (
                                 <PhotoDetails data={m}/>
										)}
									/>
								);
							})}

						<div className="flex-container">
							{data &&
								data.map(m => {
									return (
										<Fragment>
											<Link to={`/${m.id}`}>
												<img
													className="thumb"
													title={m.title}
													src={m.display_sizes[2].uri}
													alt={m.artist}
													key={m.id}
												/>
											</Link>
										</Fragment>
									);
								})}
						</div>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
