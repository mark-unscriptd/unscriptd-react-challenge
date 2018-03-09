import React, { Component, Fragment } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { listPhotos, updatePhoto, searchPhotoByCaption, deletePhoto } from "./api/Photos";
import PhotoDetails from "./components/PhotoDetails";
import TopPageThumbs from "./components/TopPageThumbs";
import SearchField from "./components/SearchField";

class App extends Component {
  state = {
    error: null,
    enteredWord: "",
    data: null,
    selectedPhotos: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.load();
    }, 50);
  }

  load() {
    listPhotos()
      .then(data => {
        this.setState({ data });
        this.setState({ selectedPhotos: [] });
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
    let toggle = document.getElementById("edit-wrapper");
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
    });
  };

  clearSearch = () => {
    searchPhotoByCaption("").then(res => {
      this.setState({ data: res, error: null });
    });
  };

  toggleTick = event => {
    const elements = event.target;
    const isChecked = elements.checked;
    const id = elements.value;
    const { selectedPhotos } = this.state;

    if (isChecked) {
      selectedPhotos.push(id);
      this.setState({ selectedPhotos });
    } else {
      const index = selectedPhotos.indexOf(id);
      selectedPhotos.splice(index, 1);
      this.setState({ selectedPhotos });
    }
  };

  deletePhotos = () => {
    let { selectedPhotos } = this.state;
    selectedPhotos.map(photo => {
      deletePhoto(photo)
        .then(res => {
          this.load();
        })
        .catch(error => {
          this.setState({ error });
        });
      return null;
    });
  };

  render() {
    const { data, error, selectedPhotos } = this.state;
    return (
      <Router>
        <div className="App">
          <header className="header">
            <Link to="/">
              <h1 className="h1 text-center">
                <span role="img" aria-label="v">
                  🤘
                </span>Our awesome moments
                <span role="img" aria-label="v">
                  🤘
                </span>
              </h1>
            </Link>
          </header>

          {/* load error message */}
          {error && <h2 id="error">{error.message}</h2>}

          {/* Main */}
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Fragment>
                  <SearchField
                    enteredWord={this.enteredWord}
                    searchImage={this.searchImage}
                    enteredWordHandler={this.enteredWordHandler}
                    clearSearch={this.clearSearch}
                  />
                  <TopPageThumbs
                    data={data}
                    enteredWord={this.enteredWord}
                    searchImage={this.searchImage}
                    enteredWordHandler={this.enteredWordHandler}
                    clearSearch={this.clearSearch}
                    selectedPhotos={selectedPhotos}
                    toggleTick={this.toggleTick}
                    deletePhotos={this.deletePhotos}
                  />
                </Fragment>
              )}
            />

            {/* Show individual photo */}
            {data &&
              data.map(data => {
                return (
                  <Route
                    key={data.id}
                    path={`/${data.id}`}
                    exact
                    render={() => (
                      <Fragment>
                        <PhotoDetails
                          data={data}
                          onClickSave={this.onClickSave}
                          showEditForm={this.showEditForm}
                        />
                      </Fragment>
                    )}
                  />
                );
              })}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
