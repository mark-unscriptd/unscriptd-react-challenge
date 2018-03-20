import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import CardResult from './CardResult.jsx';
import SearchBar from './SearchBar.jsx';
import AlertModal from './AlertModal.jsx';




class ResultCol extends React.Component {

    constructor(props, context) {
        super(props, context)

        this.callbackToGetDataFromSearch = this.callbackToGetDataFromSearch.bind(this);
        this.callbackToGetDataFromCards = this.callbackToGetDataFromCards.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.fetchImages = this.fetchImages.bind(this);



        this.state = {
            show: false,
            images: [],
            delImages: [],
            displaynone: 'display-none',
            responsestatus: '',
            messagedisplay: '',
            delState: "disabled"
        };
    }


    /**
     * fetch images from the json file
     */
    fetchImages() {

        var url = 'http://localhost:3010/images/'

        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({ images: response });
            }
            );


    }

    /**
     *  actions on component load
     */
    componentDidMount() {

        this.fetchImages();

    }





    handleDelete() {

        if (window.confirm("Are you sure, do you want to delete the selected items ?")) {

            this.state.delImages.map((val, key) => {

                var url = 'http://localhost:3010/images/' + val.id;

                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(val)

                })
                    .then(response => response.json())
                    .then(response => {

                    });

            })

        }


        this.fetchImages();

    }


    /**
     * callback function to get data from the child SearchBar component to rerender
     * @param {*} passedDataFromSearch 
     */
    callbackToGetDataFromSearch(passedDataFromSearch) {

        this.setState({ images: passedDataFromSearch });
    }


    /**
     * get selected cards & update the selected array
     * @param {*} passedDataFromCards 
     * @param {*} state 
     */
    callbackToGetDataFromCards(passedDataFromCards, state) {
        var arr = this.state.delImages.slice();

        if (state === true) {

            arr.push(passedDataFromCards)
            this.setState({ delImages: arr });
        } else {

            var index = arr.indexOf(passedDataFromCards);
            arr.splice(index, 1);


        }


        if (arr.length > 0) {
            this.setState({ delState: "" });
        }

    }


    render() {

        return (

            <div>

                <div className="col-md-12">
                    <SearchBar images={this.state.images} callbackFromParent={this.callbackToGetDataFromSearch} />

                    <Button onClick={this.handleDelete} className={"btn border-danger " + this.state.delState} > Delete</Button>
                </div>
                <div className="scroll-y col-md-12">

                    {this.state.images.map((val, key) => <CardResult
                        callbackFromCard={this.callbackToGetDataFromCards} key={key}
                        data={val} checked={false} colours={"no-colour "}
                    />)}

                </div>
            </div>

        );
    }
}

export default ResultCol;