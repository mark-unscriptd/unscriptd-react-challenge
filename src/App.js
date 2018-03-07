import React, { Component } from "react";
import "./App.css";
import { listPatrick } from "./api/PatrickSmith";

class App extends Component {
	state = {
		error: null,
		// enteredSymbol: "USD",
		data: null
	};

	componentDidMount() {
		listPatrick().then(data => {
			this.setState({ data });
		});
	}

	render() {
		const { data } = this.state;
		return (
			<div className="App">
				<header className="header">
					<h1 className="h1 text-center">Welcome to the World of Patrick Smith</h1>
					<input type="text" placeholder="search" />
					<svg id="search" version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 466 466">
						<circle cx="309" cy="161" r="139" fill="#90c5ff" />
						<path fill="#59595a" d="M59 454l-44-44 126-126 44 44z" />
						<path fill="#abcb57" d="M184 329l-44-44 13-12 43 44zM47 466L3 423l12-12 44 43z" />
						<path
							d="M418 52a154 154 0 0 0-219 0 154 154 0 0 0-10 206l-26 25 23 23 25-25a153 153 0 0 0 207-11 154 154 0 0 0 0-218zm-23 196a122 122 0 0 1-173 0 122 122 0 0 1 0-174 122 122 0 0 1 173 0 122 122 0 0 1 0 174z"
							fill="#59595a"
						/>
					</svg>
				</header>
				<div className="flex-container">
					{data &&
						data.map(m => {
							return <img className="item" src={m.display_sizes[2].uri} alt={m.artist} key={m.id} />;
						})}
				</div>
			</div>
		);
	}
}

export default App;
