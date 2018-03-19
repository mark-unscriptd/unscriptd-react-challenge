import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import CardResult from './CardResult.jsx';


class SearchBar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);


        this.state = {
            images: this.props.images,
            value: "",
            displaynone: 'display-none',
            responsestatus: '',
            messagedisplay: ''
        };
    }


    /**
     *  search matching keywords from  captions 
     * @param {*} event 
     */
    handleSubmit(event) {

        var url = 'http://localhost:3010/images/?caption_like=' + this.state.value;

        fetch(url)
            .then(response => response.json())
            .then(response => {

                this.setState({ images: response });
                console.log(this.state.images);

                this.props.callbackFromParent(this.state.images)

                if (this.state.images.length > 0) {
                    this.setState({ displaynone: 'display-none' })

                } else {
                    this.setState({ displaynone: ' ' })
                    this.setState({ responsestatus: 'alert alert-danger' })
                    this.setState({ messagedisplay: 'No images found with caption ' + this.state.value })
                }

            });

        event.preventDefault();
    }


    /**
    * change event for textarea
    * @param {*} event 
    */
    handleChange(event) {
        this.setState({ value: event.target.value });

    }


    render() {

        return (

            <div className="search-div format-padding col-md-11 m-b-30">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="col-md-10 search-bar" placeholder="Enter keywords to filter images through captions" type="text" value={this.state.value} onChange={this.handleChange} />
                    <input className="col-md-2 btn btn-default border-primary" type="submit" value="Filter" />
                </form>
                <div className={"col-md-12  " + this.state.displaynone + " " + this.state.responsestatus}>
                    <strong>{this.state.messagedisplay}  </strong>
                </div>

            </div>



        );
    }
}

export default SearchBar;